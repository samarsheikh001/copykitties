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
    subHeading: 'Create facebook listicle.',
    icon: 'TiktokIcon',
    textFields: [
      {
        title: 'What is your topic',
        name: 'topic',
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
