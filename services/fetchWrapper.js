import s1 from '/assets/images/powder.jpg'
import s2 from '/assets/images/tea-bag.jpg'
import s3 from '/assets/images/leaves.jpg'

const services = [
  { image: s1, title: "Moringa Powder", description: " Moringa powder is rich in vitamins, minerals, and amino acids. It can be used in a variety of ways such as in smoothies, soups, and tea." },
  { image: s2, title: "Moringa Tea", description: "Made from dried Moringa leaves. It is a refreshing beverage that is also packed with antioxidants and anti-inflammatory compounds." },
  { image: s3, title: "Moringa Leaves", description: "Derived from the seeds of the Moringa tree. It's often used in skincare products due to its moisturizing and anti-aging properties." },
]

export function fetchWrapper(url) {  
  /* Later API usage
  const response = fetch(url);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  */
  return services;
}