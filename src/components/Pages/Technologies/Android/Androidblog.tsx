import React from "react";
import Slider from "react-slick";
import SinglePost from "../../../MegentoPost/SinglePost";
const CardImgitems = [
  {
    src: "/AndroidImg1.jpg",
    title: "Products Subscriptions",
    desc: "You can monetize in the way that works best for your business—priced or free, with in-app products or subscriptions—for highest engagement and revenues. You also have complete control of the pricing for your apps and in-app products and can set or change prices in any supported currency at any time.",
  },
  {
    src: "/AndroidImg2.jpg",
    title: "Growing Customer Base",
    desc: "Beyond growing your customer base, Google Play helps you build visibility and engagement across your apps and brand. As your apps rise in popularity, Google Play gives them higher placement in weekly 'top' charts and rankings, and for the best apps promotional slots in curated collections.",
  },
  {
    src: "/AndroidImg3.jpg",
    title: "Premier Marketplace",
    desc: "Google Play is the premier marketplace for selling and distributing Android apps. When you publish an app on Google Play, you reach the huge installed base of Android. Preinstalled on hundreds of millions of Android devices around the world, Google Play can be a growth engine for your business.",
  },
];
const Androidblog = (props: any) => {
  const { BlogBanner } = props;
  const blogSettings = {
    dots: false,
    centerMode: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const BlogData = CardImgitems.map((item: any, i: any) => {
    return (
      <SinglePost
        blogClass="blog-item"
        blogImage={item.src}
        blogTitle={item.title}
        blogDesc={item.desc}
        key={i}
      />
    );
  });
  const PrismicBlogData = BlogBanner?.body[1]?.items?.map(
    (item: any, i: any) => {
      return (
        <SinglePost
          blogClass="blog-item"
          blogImage={item.mv_img.url}
          blogTitle={item.mv_title[0].text}
          blogDesc={item.mv_desc[0].text}
          key={i}
        />
      );
    }
  );
  return (
    <React.Fragment>
      <Slider {...blogSettings}>
        {BlogBanner ? PrismicBlogData : BlogData}
      </Slider>
    </React.Fragment>
  );
};

export default Androidblog;
