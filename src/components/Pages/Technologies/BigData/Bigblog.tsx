import React from "react";
import Slider from "react-slick";
import SinglePost from "../../../MegentoPost/SinglePost";

const CardImgitems = [
  {
    src: "/BigDataImg1.jpg",
    title: "Digital ecosystem architecture",
    desc: "Digital transformation and Bi-modal IT are the recent trends influencing every business.",
  },
  {
    src: "/BigDataImg2.jpg",
    title: "HTML5/CSS3",
    desc: "The traditional workplace is fast transforming into a workplace-on the-move model where employees expect to work",
  },
  {
    src: "/BigDataImg3.jpg",
    title: "Saas/Cloud Computing",
    desc: "Esquare’s Hybrid IT Solutions provide an Automated and Orchestrated provisioning and management of Public, Private Cloud",
  },
];

const Bigblog = (props: any) => {
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

export default Bigblog;
