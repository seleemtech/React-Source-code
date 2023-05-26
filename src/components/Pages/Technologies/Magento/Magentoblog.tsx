import React from "react";
import Slider from "react-slick";
import SinglePost from "../../../MegentoPost/SinglePost";
const CardImgitems = [
  {
    src: "/MAgentoImg1.jpg",
    title: "Open-Source Ecommerce platform",
    desc: "Developers can implement the core files and extend its functionality by adding new plug-in modules provided by other developers.",
  },
  {
    src: "/MagentoImg2.jpg",
    title: "Magento Commerce",
    desc: "Released April 11, 2016, Magento Commerce is a platform as a service. Magento 2 has many new and improved features, developer tools and its architecture is quite different from all the previous versions.",
  },
  {
    src: "/MagentoImg3.jpg",
    title: "Magento Commerce (On-Premises)",
    desc: "This product is designed for large businesses that require technical support with installation, usage, configuration, and troubleshooting.",
  },
];

const Magentoblog = (props: any) => {
  const { BlogSlice } = props;
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
  const PrismicBlogData = BlogSlice?.body[1]?.items?.map(
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
        {BlogSlice ? PrismicBlogData : BlogData}
      </Slider>
    </React.Fragment>
  );
};

export default Magentoblog;
