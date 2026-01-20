// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Products.module.css';

// const Products: React.FC = () => {
//   const productCategories = [
//     {
//       title: 'Business Bags',
//       image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1200',
//       gallery: [
//         'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
//         'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
//         'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400'
//       ],
//       description: 'Our premium business bag collection features meticulously crafted leather and fabric bags designed for the modern professional. Each bag combines functionality with sophisticated style, featuring multiple compartments, laptop sleeves, and durable construction. From executive briefcases to versatile messenger bags, our collection caters to diverse business needs while maintaining the highest quality standards.',
//       materials: 'Premium leather, high-grade fabric, reinforced stitching',
//       types: 'Briefcases, Laptop bags, Messenger bags, Travel bags',
//       useCases: 'Corporate meetings, business travel, office use, professional networking'
//     },
//     {
//       title: 'Home Textiles',
//       image: 'https://images.pexels.com/photos/6444444/pexels-photo-6444444.jpeg?auto=compress&cs=tinysrgb&w=1200',
//       gallery: [
//         'https://images.pexels.com/photos/6444444/pexels-photo-6444444.jpeg?auto=compress&cs=tinysrgb&w=400',
//         'https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=400',
//         'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400'
//       ],
//       description: 'Transform your living space with our luxurious home textile collection. From elegant bedding sets to decorative cushions and curtains, each piece is crafted using the finest materials and traditional techniques. Our textiles blend comfort with style, offering durability and easy maintenance while adding a touch of sophistication to any home décor.',
//       materials: 'Cotton, silk, linen, blended fabrics, eco-friendly dyes',
//       types: 'Bedsheets, Cushion covers, Curtains, Table linens, Throws',
//       useCases: 'Bedroom décor, living room enhancement, hotel industry, interior design'
//     },
//     {
//       title: 'Garments',
//       image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200',
//       gallery: [
//         'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
//         'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
//         'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400'
//       ],
//       description: 'Our garment collection represents the perfect fusion of traditional Indian craftsmanship and contemporary fashion. Each piece is designed with attention to detail, using premium fabrics and modern cuts. From casual wear to formal attire, our garments offer comfort, style, and durability, making them suitable for diverse international markets.',
//       materials: 'Cotton, silk, polyester blends, sustainable fabrics',
//       types: 'Formal wear, Casual clothing, Traditional garments, Custom designs',
//       useCases: 'Professional attire, casual wear, special occasions, retail distribution'
//     }
//   ];

//   return (
//     <div className={styles.productsPage}>
//       {/* Hero Section */}
//       <section 
//         className="hero-section"
//         style={{
//           backgroundImage: 'url("https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600")'
//         }}
//       >
//         <div className="hero-overlay"></div>
//         <div className="hero-content">
//           <h1 className="hero-title">Our Products</h1>
//           <p className="hero-subtitle">Premium quality products crafted for international markets</p>
//         </div>
//       </section>

//       {/* Product Categories */}
//       {productCategories.map((category, index) => (
//         <section key={index} className={`section ${styles.categorySection} ${index % 2 === 1 ? styles.reverse : ''}`}>
//           <div className="container">
//             <div className={styles.categoryContent}>
//               <div className={styles.categoryGallery}>
//                 <div className={styles.mainImage}>
//                   <img src={category.image} alt={category.title} />
//                 </div>
//                 <div className={styles.thumbnails}>
//                   {category.gallery.map((img, idx) => (
//                     <img key={idx} src={img} alt={`${category.title} ${idx + 1}`} />
//                   ))}
//                 </div>
//               </div>
//               <div className={styles.categoryDetails}>
//                 <h2 className={styles.categoryTitle}>{category.title}</h2>
//                 <p className={styles.categoryDescription}>{category.description}</p>
                
//                 <div className={styles.categorySpecs}>
//                   <div className={styles.specItem}>
//                     <h4>Materials</h4>
//                     <p>{category.materials}</p>
//                   </div>
//                   <div className={styles.specItem}>
//                     <h4>Types Available</h4>
//                     <p>{category.types}</p>
//                   </div>
//                   <div className={styles.specItem}>
//                     <h4>Use Cases</h4>
//                     <p>{category.useCases}</p>
//                   </div>
//                 </div>

//                 <div className={styles.categoryActions}>
//                   <Link to="/contact" className="btn btn-primary">Request Catalog</Link>
//                   <Link to="/contact" className="btn btn-secondary">Get a Quote</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default Products;

import React, { useState } from 'react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleRequestCatalog = (productTitle: string) => {
    const message = `Hi! I'm interested in requesting a catalog for "${productTitle}". Please provide more information.`;
    const whatsappUrl = `https://wa.me/918285016625?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const categories = [
    {
      id: 'bags',
      title: 'Bags & Accesseories',
      description: 'Professional and stylish bags for all occasions',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: '👜'
    },
    {
      id: 'garments',
      title: 'Garments - Ladies & Kids',
      description: 'Premium clothing and formal wear',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: '👔'
    },
    {
      id: 'activewear',
      title: 'Active Wear - Sports,Gym,Swim Wear',
      description: 'Comfortable and durable sports clothing',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: '🏃'
    },
    {
      id: 'hometextiles',
      title: 'Home Decor & Textiles',
      description: 'Luxurious home décor and textiles',
      image: 'https://images.pexels.com/photos/6444444/pexels-photo-6444444.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: '🏠'
    }
  ];

  const allProducts = {
    bags: [
      {
        title: 'Executive Briefcase',
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Premium leather briefcase with multiple compartments and laptop sleeve.',
        materials: 'Genuine leather, brass hardware',
        types: 'Briefcases, Business bags',
        useCases: 'Corporate meetings, business travel',
      },
      {
        title: 'Messenger Bag Pro',
        image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Versatile messenger bag with laptop compartment and organizer pockets.',
        materials: 'Canvas, leather accents',
        types: 'Messenger bags, Crossbody bags',
        useCases: 'Daily commute, casual business',
      },
      {
        title: 'Travel Backpack',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Spacious backpack perfect for business trips and daily use.',
        materials: 'Nylon, polyester lining',
        types: 'Backpacks, Travel bags',
        useCases: 'Business travel, daily commuting',
      },
      {
        title: 'Laptop Sleeve',
        image: 'https://images.pexels.com/photos/1181470/pexels-photo-1181470.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Protective laptop sleeve with premium padding and sleek design.',
        materials: 'Neoprene, microfiber lining',
        types: 'Laptop cases, Tech accessories',
        useCases: 'Laptop protection, office use',
      },
      {
        title: 'Tote Bag Classic',
        image: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Elegant tote bag suitable for work and casual outings.',
        materials: 'Cotton canvas, leather handles',
        types: 'Tote bags, Shopping bags',
        useCases: 'Daily use, shopping, work',
      },
      {
        title: 'Crossbody Bag',
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Compact crossbody bag with multiple compartments for essentials.',
        materials: 'Leather, metal hardware',
        types: 'Crossbody bags, Shoulder bags',
        useCases: 'Casual outings, travel',
      },
      {
        title: 'Duffel Bag',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Large duffel bag perfect for gym and weekend trips.',
        materials: 'Polyester, reinforced stitching',
        types: 'Duffel bags, Sports bags',
        useCases: 'Gym, sports, weekend trips',
      },
      {
        title: 'Wallet Set',
        image: 'https://images.pexels.com/photos/1181470/pexels-photo-1181470.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Premium leather wallet with RFID blocking technology.',
        materials: 'Genuine leather, RFID blocking',
        types: 'Wallets, Card holders',
        useCases: 'Daily use, security',
      },
      {
        title: 'Pouch Collection',
        image: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Set of organizer pouches for travel and daily organization.',
        materials: 'Nylon, mesh panels',
        types: 'Organizer pouches, Travel accessories',
        useCases: 'Travel organization, daily use',
      },
      {
        title: 'Satchel Bag',
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Classic satchel bag with vintage-inspired design and modern functionality.',
        materials: 'Leather, brass buckles',
        types: 'Satchel bags, Vintage bags',
        useCases: 'Casual use, vintage style',
      }
    ],
    garments: [
      {
        title: 'Formal Blazer',
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Tailored formal blazer with modern cut and premium fabric.',
        materials: 'Wool blend, polyester lining',
        types: 'Blazers, Formal jackets',
        useCases: 'Business meetings, formal events',
      },
      {
        title: 'Dress Shirt',
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Classic dress shirt with crisp collar and comfortable fit.',
        materials: 'Cotton, polyester blend',
        types: 'Dress shirts, Formal shirts',
        useCases: 'Office wear, formal occasions',
      },
      {
        title: 'Business Suit',
        image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Complete business suit with jacket and trousers.',
        materials: 'Wool blend, silk lining',
        types: 'Suits, Business attire',
        useCases: 'Corporate meetings, formal events',
      },
      {
        title: 'Casual Shirt',
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Comfortable casual shirt perfect for everyday wear.',
        materials: 'Cotton, spandex blend',
        types: 'Casual shirts, Everyday wear',
        useCases: 'Daily wear, casual outings',
      },
      {
        title: 'Chinos',
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Versatile chinos suitable for both casual and smart casual looks.',
        materials: 'Cotton twill, stretch fabric',
        types: 'Chinos, Casual pants',
        useCases: 'Casual wear, smart casual',
      },
      {
        title: 'Polo Shirt',
        image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Classic polo shirt with comfortable fit and durable construction.',
        materials: 'Cotton pique, polyester blend',
        types: 'Polo shirts, Casual tops',
        useCases: 'Casual wear, sports',
      },
      {
        title: 'Dress Pants',
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Formal dress pants with clean lines and professional appearance.',
        materials: 'Wool blend, polyester lining',
        types: 'Dress pants, Formal trousers',
        useCases: 'Business wear, formal events',
      },
      {
        title: 'Cardigan',
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Comfortable cardigan perfect for layering and casual wear.',
        materials: 'Cotton blend, acrylic',
        types: 'Cardigans, Sweaters',
        useCases: 'Casual wear, layering',
      },
      {
        title: 'Trousers',
        image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Versatile trousers suitable for various occasions.',
        materials: 'Cotton blend, stretch fabric',
        types: 'Trousers, Casual pants',
        useCases: 'Daily wear, office casual',
      },
      {
        title: 'Vest',
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Classic vest for layering and formal occasions.',
        materials: 'Wool blend, silk lining',
        types: 'Vests, Formal wear',
        useCases: 'Formal wear, layering',
      }
    ],
    activewear: [
      {
        title: 'Sports T-Shirt',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Moisture-wicking sports t-shirt for active lifestyle.',
        materials: 'Polyester blend, moisture-wicking',
        types: 'Sports shirts, Athletic wear',
        useCases: 'Sports, gym, outdoor activities',
      },
      {
        title: 'Training Shorts',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Comfortable training shorts with built-in compression.',
        materials: 'Polyester, spandex blend',
        types: 'Sports shorts, Athletic wear',
        useCases: 'Training, sports, gym',
      },
      {
        title: 'Running Jacket',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Lightweight running jacket with breathable fabric.',
        materials: 'Polyester, mesh panels',
        types: 'Sports jackets, Running gear',
        useCases: 'Running, outdoor sports',
      },
      {
        title: 'Yoga Pants',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Stretchy yoga pants for comfort and flexibility.',
        materials: 'Polyester, spandex blend',
        types: 'Yoga pants, Athletic wear',
        useCases: 'Yoga, fitness, casual wear',
      },
      {
        title: 'Hoodie',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Comfortable hoodie perfect for workouts and casual wear.',
        materials: 'Cotton blend, polyester',
        types: 'Hoodies, Casual wear',
        useCases: 'Gym, casual wear, outdoor',
      },
      {
        title: 'Compression Shirt',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Performance compression shirt for enhanced athletic performance.',
        materials: 'Polyester, spandex blend',
        types: 'Compression wear, Athletic shirts',
        useCases: 'Sports, training, recovery',
      },
      {
        title: 'Track Pants',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Classic track pants for training and casual wear.',
        materials: 'Polyester blend, cotton',
        types: 'Track pants, Athletic wear',
        useCases: 'Training, casual wear, sports',
      },
      {
        title: 'Sports Bra',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Supportive sports bra for high-impact activities.',
        materials: 'Polyester, spandex blend',
        types: 'Sports bras, Athletic wear',
        useCases: 'Sports, fitness, active lifestyle',
      },
      {
        title: 'Athletic Socks',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Moisture-wicking athletic socks for comfort and performance.',
        materials: 'Cotton blend, polyester',
        types: 'Athletic socks, Sports accessories',
        useCases: 'Sports, fitness, daily wear',
      },
      {
        title: 'Workout Tank',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Breathable workout tank top for intense training sessions.',
        materials: 'Polyester, mesh panels',
        types: 'Tank tops, Athletic wear',
        useCases: 'Gym, training, outdoor sports',
      }
    ],
    hometextiles: [
      {
        title: 'Luxury Bedding Set',
        image: 'https://images.pexels.com/photos/6444444/pexels-photo-6444444.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Premium bedding set with high thread count cotton sheets.',
        materials: 'Egyptian cotton, silk accents',
        types: 'Bedding sets, Sheets',
        useCases: 'Bedroom décor, luxury hotels',
      },
      {
        title: 'Decorative Cushions',
        image: 'https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Vibrant decorative cushions to enhance your living space.',
        materials: 'Cotton, polyester blend',
        types: 'Cushion covers, Throw pillows',
        useCases: 'Living room décor, interior design',
      },
      {
        title: 'Silk Curtains',
        image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Elegant silk curtains that add sophistication to any room.',
        materials: 'Silk, blended fabrics',
        types: 'Curtains, Drapes',
        useCases: 'Home décor, hotel interiors',
      },
      {
        title: 'Table Linens',
        image: 'https://images.pexels.com/photos/6444444/pexels-photo-6444444.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Elegant table linens for dining and special occasions.',
        materials: 'Linen, cotton blends',
        types: 'Tablecloths, Napkins',
        useCases: 'Dining, hospitality industry',
      },
      {
        title: 'Throw Blanket',
        image: 'https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Soft throw blanket perfect for cozy evenings.',
        materials: 'Cotton blend, acrylic',
        types: 'Throw blankets, Home accessories',
        useCases: 'Living room, bedroom, comfort',
      },
      {
        title: 'Bath Towels',
        image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Premium bath towels with excellent absorbency and softness.',
        materials: 'Turkish cotton, bamboo blend',
        types: 'Bath towels, Bath accessories',
        useCases: 'Bathroom, spa, daily use',
      },
      {
        title: 'Kitchen Towels',
        image: 'https://images.pexels.com/photos/6444444/pexels-photo-6444444.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Durable kitchen towels for everyday use.',
        materials: 'Cotton, linen blend',
        types: 'Kitchen towels, Dish towels',
        useCases: 'Kitchen, cooking, cleaning',
      },
      {
        title: 'Placemats Set',
        image: 'https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Stylish placemats to enhance your dining experience.',
        materials: 'Cork, cotton blend',
        types: 'Placemats, Dining accessories',
        useCases: 'Dining table, entertaining',
      },
      {
        title: 'Window Curtains',
        image: 'https://images.pexels.com/photos/6527056/pexels-photo-6527056.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Light-filtering window curtains for privacy and style.',
        materials: 'Polyester blend, cotton',
        types: 'Window curtains, Privacy curtains',
        useCases: 'Bedroom, living room, privacy',
      },
      {
        title: 'Bed Runner',
        image: 'https://images.pexels.com/photos/6444444/pexels-photo-6444444.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Decorative bed runner to add elegance to your bedroom.',
        materials: 'Cotton, silk accents',
        types: 'Bed runners, Bedroom accessories',
        useCases: 'Bedroom décor, luxury hotels',
      }
    ]
  };

  const currentProducts = selectedCategory ? allProducts[selectedCategory as keyof typeof allProducts] : [];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[40rem] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Premium quality products crafted for international markets
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Categories or Products Section */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!selectedCategory ? (
            // Show Categories
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Choose Your Category
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Select a category to explore our premium collection of products
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer"
                  >
                    <div className="relative w-full h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 text-4xl opacity-80">
                        {category.icon}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // Show Products for Selected Category
            <>
              <div className="flex items-center justify-between mb-12">
                <div>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 mb-4"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Categories
                  </button>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {categories.find(cat => cat.id === selectedCategory)?.title} Collection
                  </h2>
                  <p className="text-lg text-gray-600">
                    {categories.find(cat => cat.id === selectedCategory)?.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {currentProducts.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                  >
                    <div className="relative w-full h-56 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {product.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Materials</h4>
                            <p className="text-xs text-gray-500 mt-1">{product.materials}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Types</h4>
                            <p className="text-xs text-gray-500 mt-1">{product.types}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Use Cases</h4>
                            <p className="text-xs text-gray-500 mt-1">{product.useCases}</p>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleRequestCatalog(product.title)}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2 group"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Request Catalog
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;