// const date = 1652021787961;
// const expire = new Date(date);

// console.log(expire);

function update_content_analysis() {
  var keyword_string = $("#keywords").val();
  var keywords = keyword_string.split(",");
  var keywords_count = keywords.length;
  var main_keyword = keywords[0].toLowerCase();
  var score = 0;
  //var content = $('#article').val();
  var content = "<div>" + tinymce.activeEditor.getContent() + "</div>";

  var wordcount = parseInt(
    $(".tox-statusbar__wordcount").text().replace(" words", "")
  );
  if (isNaN(wordcount)) {
    wordcount = tinymce.activeEditor.plugins.wordcount.getCount();
  }
  $("#wdcnt").text(wordcount.toLocaleString("us"));

  if (content.length > 0) {
    var heading = $(content).find("h1");
    var heading_txt = heading.text().toLowerCase();
    var subheadings = $(content).find("h2,h3,h4,h5,h6");
    var paragraphs = $(content).find("p");
    var links = $(content).find("a");
    var subheadings_count = subheadings.length;
    var paragraphs_count = paragraphs.length;
    var links_count = links.length;
    var headings_count = heading.length + subheadings_count;
    $("#pcnt").text(paragraphs_count);
    $("#lcnt").text(links_count);
    $("#hcnt").text(headings_count);

    if (keyword_string.length > 0) {
      // score analysis
      var wordcount_li = $(".content-bullets li[data-type='wordcount']");
      if (wordcount > 800) {
        //wordcount
        wordcount_li.addClass("passed");
        score = score + 12;
      } else {
        wordcount_li.removeClass("passed");
      }

      var headinghaskeyword_li = $(
        ".content-bullets li[data-type='headinghaskeyword']"
      );
      if (heading_txt.indexOf(main_keyword) >= 0) {
        // kw in heading
        headinghaskeyword_li.addClass("passed");
        score = score + 12;
      } else {
        headinghaskeyword_li.removeClass("passed");
      }

      var subheadinghaskeyword_li = $(
        ".content-bullets li[data-type='subheadinghaskeyword']"
      );
      subheadinghaskeyword_li.removeClass("passed");
      $.each(subheadings, function (key, value) {
        if (value.innerHTML.toLowerCase().includes(main_keyword)) {
          subheadinghaskeyword_li.addClass("passed");
          score = score + 11;
          return false;
        }
      });

      var keywordincontent_li = $(
        ".content-bullets li[data-type='keywordincontent']"
      );
      keywordincontent_li.removeClass("passed");
      var kw_in_content = false;
      var kw_beginning = false;
      var short_paragraphs = true;
      var keyword_in_cnt = 0;
      $.each(paragraphs, function (key, value) {
        var p_string = value.innerHTML.toLowerCase();
        if (p_string.includes(main_keyword)) {
          kw_in_content = true;
          keyword_in_cnt++;
        }
        if (key < 2 && p_string.includes(main_keyword)) {
          kw_beginning = true;
        }
        if (p_string.length > 120) {
          short_paragraphs = false;
        }
      });

      if (kw_in_content) {
        keywordincontent_li.addClass("passed");
        score = score + 14;
      } else {
        keywordincontent_li.removeClass("passed");
      }

      var keywordatthebeginning_li = $(
        ".content-bullets li[data-type='keywordatthebeginning']"
      );
      if (kw_beginning) {
        keywordatthebeginning_li.addClass("passed");
        score = score + 8;
      } else {
        keywordatthebeginning_li.removeClass("passed");
      }

      var shortparagraphs_li = $(
        ".content-bullets li[data-type='shortparagraphs']"
      );
      if (short_paragraphs) {
        shortparagraphs_li.addClass("passed");
        score = score + 5;
      } else {
        shortparagraphs_li.removeClass("passed");
      }

      var numberintitle_li = $(
        ".content-bullets li[data-type='numberintitle']"
      );
      numberintitle_li.removeClass("passed");
      if (/\d/.test(heading_txt)) {
        numberintitle_li.addClass("passed");
        score = score + 3;
      }

      var keywordcount_li = $(".content-bullets li[data-type='keywordcount']");
      if (keywords_count < 4) {
        keywordcount_li.addClass("passed");
        score = score + 4;
      } else {
        keywordcount_li.removeClass("passed");
      }

      var keyword_density = (keyword_in_cnt / wordcount) * 100;
      keyword_density = parseFloat(keyword_density).toFixed(2);
      $("#keyworddensity").text(keyword_density + "%");

      var keyworddensity_li = $(
        ".content-bullets li[data-type='keyworddensity']"
      );
      if (keyword_density > 1 && keyword_density < 2) {
        keyworddensity_li.addClass("passed");
        score = score + 9;
      } else {
        keyworddensity_li.removeClass("passed");
      }

      var recommended_paragraphs = headings_count * 2.3;
      $(".nump").text(parseInt(recommended_paragraphs));
      var paragraphcount_li = $(
        ".content-bullets li[data-type='paragraphcount']"
      );
      if (paragraphs_count >= recommended_paragraphs) {
        paragraphcount_li.addClass("passed");
        score = score + 4;
      } else {
        paragraphcount_li.removeClass("passed");
      }

      var useheadings_li = $(".content-bullets li[data-type='useheadings']");
      if (headings_count >= 4) {
        useheadings_li.addClass("passed");
        score = score + 5;
      } else {
        useheadings_li.removeClass("passed");
      }

      var uselinks_li = $(".content-bullets li[data-type='uselinks']");
      if (links_count >= 5) {
        uselinks_li.addClass("passed");
        score = score + 3;
      } else {
        uselinks_li.removeClass("passed");
      }

      // Update score bar
      if (score <= 35) {
        $(".score-area .progress-bar").addClass("danger");
      } else if (score > 35 && score < 70) {
        $(".score-area .progress-bar").addClass("warning");
      } else if (score >= 70) {
        $(".score-area .progress-bar").addClass("success");
      }
      if (score >= 100) {
        score = 100;
      }
    } else {
      score = 0;
      $(".score-area, .accordeon.tasks").hide();
    }
  } else {
    score = 0;
  }
  $(".score-area .progress-bar").css("width", score + "%");
  $("#score").text(score);
}
