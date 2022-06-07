const marketingTools = {
  'google-ads-headline': {
    heading: 'Google Ads Headline',
    subHeading:
      "Create high converting copy for the 'Headline' section of your Google Ads.",
    icon: 'GoogleIcon',
    textFields: [
      {
        title: 'Company/Product Name',
        name: 'name',
        isTextarea: false,
        placeholder: 'Product Name',
      },
      {
        title: 'Product Description Name',
        name: 'description',
        isTextarea: true,
        placeholder: 'Product Description',
      },
    ],
  },
  'google-ads-description': {
    heading: 'Google Ads Description',
    subHeading:
      "Create high converting copy for the 'Description' section of your Google Ads.",
    icon: 'GoogleIcon',
    textFields: [
      {
        title: 'Company/Product Name',
        name: 'name',
        isTextarea: false,
        placeholder: 'Product Name',
      },
      {
        title: 'Product Description Name',
        name: 'description',
        isTextarea: true,
        placeholder: 'Product Description',
      },
    ],
  },
  'product-description': {
    heading: 'Product Description',
    subHeading: 'Create description for your Product.',
    icon: 'ProductIcon',
    textFields: [
      {
        title: 'Company/Product Name',
        name: 'name',
        isTextarea: false,
        placeholder: 'Product Name',
      },
      {
        title: 'Product Description Name',
        name: 'description',
        isTextarea: true,
        placeholder: 'Product Description',
      },
    ],
  },
  'facebook-listicle': {
    heading: 'Facebook Listicle',
    subHeading: 'Create facebook listicle.',
    icon: 'FacebookIcon',
    textFields: [
      {
        title: 'Company/Product Name',
        name: 'name',
        isTextarea: false,
        placeholder: 'Product Name',
      },
      {
        title: 'Product Description Name',
        name: 'description',
        isTextarea: true,
        placeholder: 'Product Description',
      },
    ],
  },
  'facebook-primary-text': {
    heading: 'Facebook Primary Text',
    subHeading: 'Create facebook primary texts.',
    icon: 'FacebookIcon',
    textFields: [
      {
        title: 'Company/Product Name',
        name: 'name',
        isTextarea: false,
        placeholder: 'Product Name',
      },
      {
        title: 'Product Description Name',
        name: 'description',
        isTextarea: true,
        placeholder: 'Product Description',
      },
    ],
  },
  'tiktok-brainstorm-topics': {
    heading: 'Tiktok Brainstorm Topics',
    subHeading: 'Brainstorm tiktok ideas.',
    icon: 'TiktokIcon',
    textFields: [
      {
        title: 'What is your topic description?',
        name: 'description',
        isTextarea: true,
        placeholder: '5 easy ways to come up with content ideas',
      },
    ],
  },
  'video-titles': {
    heading: 'Video Titles',
    subHeading:
      "Write compelling YouTube video title to catch people's attention.",
    icon: 'YoutubeIcon',
    textFields: [
      {
        title: 'What is your topic description?',
        name: 'description',
        isTextarea: true,
        placeholder: '5 easy ways to come up with content ideas',
      },
    ],
  },
  'video-descriptions': {
    heading: 'Video Descriptions',
    subHeading:
      'Write compelling YouTube descriptions to get people interested in your video.',
    icon: 'YoutubeIcon',
    textFields: [
      {
        title: 'What is your topic description?',
        name: 'description',
        isTextarea: true,
        placeholder: '5 easy ways to come up with content ideas',
      },
    ],
  },
  'video-tags-generator': {
    heading: 'Youtube Tags Generator',
    subHeading:
      'Generate SEO-optimized YouTube tags / keywords for your video.',
    icon: 'YoutubeIcon',
    textFields: [
      {
        title: 'What is your topic description?',
        name: 'description',
        isTextarea: true,
        placeholder: '5 easy ways to come up with content ideas',
      },
    ],
  },
  'quora-answers': {
    heading: 'Quora Answers',
    subHeading:
      'Generate creative answers based on a question from Quora.',
    icon: 'QuoraIcon',
    textFields: [
      {
        title: 'What is your topic description?',
        name: 'description',
        isTextarea: true,
        placeholder: '5 easy ways to come up with content ideas',
      },
    ],
  },
};
const result = [];
for (const a of Object.keys(marketingTools)) {
  result.push({
    href: a,
    title: marketingTools[a].heading,
    icon: marketingTools[a].icon,
  });
}

console.log(result);

// const filter = result.filter((item) =>
//   item.title.toLowerCase().includes('goo'.toLowerCase()),
// );
// console.log(
//   result.filter((item) =>
//     item.title.toLowerCase().includes('goo'.toLowerCase()),
//   ),
// );
