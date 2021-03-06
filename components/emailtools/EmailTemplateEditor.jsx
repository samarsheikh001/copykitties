export default function EmailTemplateEditor({ name, action }) {
  return (
    <div className="h-full">
      <div className="h-1/4"></div>
      <div
        dangerouslySetInnerHTML={{
          __html: getEmailTemplateHtml({
            name,
            action,
            heading: "Hello",
            subheading: "Welcome to your profile",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            trailText: "or do something",
            somethingHereURL: "#",
            endMessage: "End",
          }),
        }}
      ></div>
    </div>
  );
}

function getEmailTemplateHtml({
  name,
  action,
  heading,
  subheading,
  description,
  trailText,
  endMessage,
  somethingHereURL
}) {
  const email_template = `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
    <title>Notify</title>
    
    <style type="text/css">
    
    div, p, a, li, td { -webkit-text-size-adjust:none; }
    
    .ReadMsgBody
    {width: 100%; background-color: #ffffff;}
    .ExternalClass
    {width: 100%; background-color: #ffffff;}
    body{width: 100%; height: 100%; background-color: #ffffff; margin:0; padding:0; -webkit-font-smoothing: antialiased;}
    html{width: 100%;}
    
    @font-face {
        font-family: 'proxima_novalight';src: url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-light-webfont.eot');src: url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-light-webfont.eot?#iefix') format('embedded-opentype'),url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-light-webfont.woff') format('woff'),url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-light-webfont.ttf') format('truetype');font-weight: normal;font-style: normal;}
    
    @font-face {
        font-family: 'proxima_nova_rgregular'; src: url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-regular-webfont.eot');src: url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-regular-webfont.eot?#iefix') format('embedded-opentype'),url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-regular-webfont.woff') format('woff'),url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-regular-webfont.ttf') format('truetype');font-weight: normal;font-style: normal;}
    
    @font-face {
        font-family: 'proxima_novasemibold';src: url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-semibold-webfont.eot');src: url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-semibold-webfont.eot?#iefix') format('embedded-opentype'),url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-semibold-webfont.woff') format('woff'),url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-semibold-webfont.ttf') format('truetype');font-weight: normal;font-style: normal;}
        
    @font-face {
        font-family: 'proxima_nova_rgbold';src: url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-bold-webfont.eot');src: url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-bold-webfont.eot?#iefix') format('embedded-opentype'),url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-bold-webfont.woff') format('woff'),url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-bold-webfont.ttf') format('truetype');font-weight: normal;font-style: normal;}
        
    @font-face {
        font-family: 'proxima_novablack';src: url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-black-webfont.eot');src: url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-black-webfont.eot?#iefix') format('embedded-opentype'),url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-black-webfont.woff') format('woff'),url('http://rocketway.net/themebuilder/template/templates/titan/font/proximanova-black-webfont.ttf') format('truetype');font-weight: normal;font-style: normal;}
        
    @font-face {font-family: 'proxima_novathin';src: url('http://rocketway.net/themebuilder/template/templates/mason/font/proximanova-thin-webfont.eot');src: url('http://rocketway.net/themebuilder/template/templates/mason/font/proximanova-thin-webfont.eot?#iefix') format('embedded-opentype'),url('http://rocketway.net/themebuilder/template/templates/mason/font/proximanova-thin-webfont.woff') format('woff'),url('http://rocketway.net/themebuilder/template/templates/mason/font/proximanova-thin-webfont.ttf') format('truetype');font-weight: normal;font-style: normal;}
    
    p {padding: 0!important; margin-top: 0!important; margin-right: 0!important; margin-bottom: 0!important; margin-left: 0!important; }
    
    .hover:hover {opacity:0.85;filter:alpha(opacity=85);}
    
    .image77 img {width: 77px; height: auto;}
    .avatar125 img {width: 125px; height: auto;}
    .icon61 img {width: 61px; height: auto;}
    .image75 img {width: 75px; height: auto;}
    .icon18 img {width: 18px; height: auto;}
    
    </style>
    
    <!-- @media only screen and (max-width: 640px) 
               {*/
               -->
    <style type="text/css"> @media only screen and (max-width: 640px){
            body{width:auto!important;}
            table[class=full2] {width: 100%!important; clear: both; }
            table[class=mobile2] {width: 100%!important; padding-left: 20px; padding-right: 20px; clear: both; }
            table[class=fullCenter2] {width: 100%!important; text-align: center!important; clear: both; }
            td[class=fullCenter2] {width: 100%!important; text-align: center!important; clear: both; }
            td[class=pad15] {width: 100%!important; padding-left: 15px; padding-right: 15px; clear: both;}
            
    } </style>
    <!--
    
    @media only screen and (max-width: 479px) 
               {
               -->
    <style type="text/css"> @media only screen and (max-width: 479px){
            body{width:auto!important;}
            table[class=full2] {width: 100%!important; clear: both; }
            table[class=mobile2] {width: 100%!important; padding-left: 20px; padding-right: 20px; clear: both; }
            table[class=fullCenter2] {width: 100%!important; text-align: center!important; clear: both; }
            td[class=fullCenter2] {width: 100%!important; text-align: center!important; clear: both; }
            table[class=full] {width: 100%!important; clear: both; }
            table[class=mobile] {width: 100%!important; padding-left: 20px; padding-right: 20px; clear: both; }
            table[class=fullCenter] {width: 100%!important; text-align: center!important; clear: both; }
            td[class=fullCenter] {width: 100%!important; text-align: center!important; clear: both; }
            td[class=pad15] {width: 100%!important; padding-left: 15px; padding-right: 15px; clear: both;}
            .erase {display: none;}
                    
            }
    } </style>
    
    
    
    <!-- Notification 4  -->
    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full"  bgcolor="#303030"style="background-color: rgb(48, 48, 48);">
        <tbody><tr mc:repeatable>
            <td style="background-image: url('https://samarsheikh001.github.io/images/not4_bg_image.jpg'); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: center center; background-repeat: no-repeat;" id="not4">
            <div mc:hideable>
                
                <!-- Mobile Wrapper -->
                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2">
                    <tbody><tr>
                        <td width="100%">
                            
                            <div class="sortable_inner ui-sortable">
                            <!-- Space -->
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                <tbody><tr>
                                    <td width="100%" height="40"></td>
                                </tr>
                            </tbody></table><!-- End Space -->
                            
                            <!-- Space -->
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                <tbody><tr>
                                    <td width="100%" height="40"></td>
                                </tr>
                            </tbody></table><!-- End Space -->
                            
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" object="drag-module-small">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                        
                                        <!-- Text --> 
                                        <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <tbody><tr>
                                                <td valign="middle" width="100%" style="text-align: center; font-family: Helvetica, Arial, sans-serif; font-size: 37px; color: rgb(255, 255, 255); line-height: 72px; font-weight: 100; word-break: break-all;"class="fullCenter" mc:edit="22">
                                                    <!--[if !mso]><!--><span style="font-family: 'proxima_novathin', Helvetica; font-weight: normal;"><!--<![endif]-->${heading}<!--[if !mso]><!--></span><!--<![endif]-->
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" object="drag-module-small">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                    
                                        <table width="265" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            
                                            <tbody><tr>
                                                <td width="100%" height="25"></td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" object="drag-module-small">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                    
                                        <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <tbody><tr>
                                                <td valign="middle" width="100%" style="text-align: center; font-family: Helvetica, Arial, sans-serif; font-size: 19px; color: rgb(255, 255, 255); line-height: 26px; font-weight: bold; text-transform: uppercase;"class="fullCenter" mc:edit="23">
                                                    <!--[if !mso]><!--><span style="font-family: 'proxima_nova_rgbold', Helvetica; font-weight: normal;"><!--<![endif]-->${subheading}<!--[if !mso]><!--></span><!--<![endif]-->
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="100%" height="50"></td>
                                            </tr>
                                        </tbody></table>							
                                    </td>
                                </tr>
                            </tbody></table>
                                        
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#83af9a"object="drag-module-small" style="background-color: rgb(131, 175, 154);">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                         
                                        <table width="300" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <tbody><tr>
                                                <td width="100%" height="30"></td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <!-- Avatar -->
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#83af9a"object="drag-module-small" style="background-color: rgb(131, 175, 154);">
                                <tbody><tr>
                                    <td width="100%" valign="middle" class="avatar125">
                                    
                                        <table width="265" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <tbody><tr>
                                                <td width="100%"><span ><img src="images/not4_avatar.png" width="125" alt="" border="0" mc:edit="24"></span></td>
                                            </tr>
                                        </tbody></table>							
                                    </td>
                                </tr>
                            </tbody></table>
                                    
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#83af9a"object="drag-module-small" style="background-color: rgb(131, 175, 154);">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                    <table width="265" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <tbody><tr>
                                                <td width="100%" height="30"></td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#83af9a"object="drag-module-small" style="background-color: rgb(131, 175, 154);">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                    
                                        <table width="265" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            
                                            <tbody><tr>
                                                <td valign="middle" width="100%" style="text-align: center; font-family: Helvetica, Arial, sans-serif; font-size: 34px; color: rgb(255, 255, 255); line-height: 44px; font-weight: bold;"class="fullCenter" mc:edit="25">
                                                    <!--[if !mso]><!--><span style="font-family: 'proxima_novalight', Helvetica; font-weight: normal;"><!--<![endif]-->${name}<!--[if !mso]><!--></span><!--<![endif]-->
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#83af9a"object="drag-module-small" style="background-color: rgb(131, 175, 154);">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                    
                                        <table width="265" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <tbody><tr>
                                                <td width="100%" height="30"></td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#83af9a"object="drag-module-small" style="background-color: rgb(131, 175, 154);">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                    
                                        <table width="265" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <tbody><tr>
                                                <td valign="middle" width="100%" style="text-align: center; font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: rgb(255, 255, 255); line-height: 24px;"class="fullCenter" mc:edit="26">
                                                    <!--[if !mso]><!--><span style="font-family: 'proxima_nova_rgregular', Helvetica; font-weight: normal;"><!--<![endif]-->${description}<!--[if !mso]><!--></span><!--<![endif]-->
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                             
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#83af9a"object="drag-module-small" style="background-color: rgb(131, 175, 154);">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                    
                                        <table width="265" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <tbody><tr>
                                                <td width="100%" height="40"></td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <!----------------- Button Center ----------------->
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#83af9a"object="drag-module-small" style="background-color: rgb(131, 175, 154);">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                    
                                        <table width="265" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <tbody><tr>
                                                <td>
                                                    <table border="0" cellpadding="0" cellspacing="0" align="center"> 
                                                        <tbody><tr> 
                                                            <td align="center" height="45"bgcolor="#ffffff" style="border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; padding-left: 30px; padding-right: 30px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; color: rgb(56, 56, 56); text-transform: uppercase; background-color: rgb(255, 255, 255);"mc:edit="27">
                                                                <!--[if !mso]><!--><span style="font-family: 'proxima_nova_rgbold', Helvetica; font-weight: normal;"><!--<![endif]-->
                                                                    <a href="#" style="color: rgb(56, 56, 56); font-size: 15px; text-decoration: none; line-height: 34px; width: 100%;">${action}</a>
                                                                <!--[if !mso]><!--></span><!--<![endif]-->
                                                            </td> 
                                                        </tr> 
                                                    </tbody></table> 
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table><!----------------- End Button Center ----------------->
                            
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#83af9a"object="drag-module-small" style="background-color: rgb(131, 175, 154);">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                    
                                        <table width="265" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <tbody><tr>
                                                <td width="100%" height="40"></td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#83af9a"object="drag-module-small" style="background-color: rgb(131, 175, 154);">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                    
                                        <table width="265" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <tbody><tr>
                                                <td valign="middle" width="100%" style="text-align: center; font-family: Helvetica, Arial, sans-serif; font-size: 15px; color: rgb(255, 255, 255); line-height: 24px;"class="fullCenter" mc:edit="28">
                                                    <!--[if !mso]><!--><span style="font-family: 'proxima_nova_rgregular', Helvetica; font-weight: normal;"><!--<![endif]-->${trailText}<!--[if !mso]><!--></span><!--<![endif]--> 
                                                    <!--[if !mso]><!--><span style="font-family: 'proxima_nova_rgbold', Helvetica; font-weight: normal;"><!--<![endif]--><a href="${somethingHereURL}" style="color: rgb(255, 255, 255);">here</a><!--[if !mso]><!--></span><!--<![endif]-->
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" bgcolor="#83af9a"object="drag-module-small" style="background-color: rgb(131, 175, 154);">
                                <tbody><tr>
                                    <td width="100%" valign="middle">
                                    
                                        <table width="265" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <tbody><tr>
                                                <td width="100%" height="50"></td>
                                            </tr>
                                        </tbody></table>
                                                                        
                                    </td>
                                </tr>
                            </tbody></table><!-- End Top -->
                            
                            <!-- CopyRight -->
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                <tbody><tr>
                                    <td width="100%" height="40"></td>
                                </tr>
                            </tbody></table>
                            
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                <tbody><tr>
                                    <td valign="middle" width="100%" style="text-align: center; font-family: Helvetica, Arial, sans-serif; font-size: 13px; color: rgb(255, 255, 255); line-height: 24px;"class="fullCenter" mc:edit="29">
                                        <span ><!--[if !mso]><!--><span style="font-family: 'proxima_nova_rgregular', Helvetica; font-weight: normal;"><!--<![endif]-->${endMessage}<!--[if !mso]><!--></span><!--<![endif]--></span>
                                        <br>
                                        <!--[if !mso]><!--><span style="font-family: 'proxima_nova_rgbold', Helvetica;"><!--<![endif]--><!--subscribe--><a href="#" style="text-decoration: none; color: rgb(255, 255, 255);">Unsubscribe</a><!--unsub--><!--[if !mso]><!--></span><!--<![endif]-->
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            
                            
                            <table width="352" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                <tbody><tr>
                                    <td width="100%" height="60"></td>
                                </tr>
                                <tr>
                                    <td width="100%" height="1"></td>
                                </tr>
                            </tbody></table><!-- End CopyRight -->
                            </div>
                
                        </td>
                    </tr>
                </tbody></table>
                
            </div>
            </td>
        </tr>
    </tbody></table><!-- End Notification 4 -->
    </div>	<style>body{ background: none !important; } </style>`;
  return email_template;
}
