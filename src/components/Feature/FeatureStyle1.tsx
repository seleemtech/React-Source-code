import FeatureSingle from './FeatureSingle';
import * as prismicR from "@prismicio/richtext";
// Feature Image
import image1 from '../../assets/img/features/icon/3.png';
import image2 from '../../assets/img/features/icon/2.png';
import image3 from "../../assets/img/features/icon/3.png";
import * as prismicH from '@prismicio/helpers'
import { PrismicImage, useAllPrismicDocumentsByType } from '@prismicio/react';

const FeatureStyle1 = () => {
    const [document] = useAllPrismicDocumentsByType("home");
    const slice = document && document[0]?.data;

    return (
        <div className="rs-features main-home" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 md-mb-30">
                        <FeatureSingle
                            itemClass="features-wrap"
                            itemImg={prismicH.asImageSrc(slice && slice.body[1].items[0].slidersubpic)}
                            itemTitle=  {document && (
                                <>
                                  <span>
                                    {prismicR.asText(
                                      slice && slice.body[1].items[0].slidersubtitle
                                    )}
                                  </span>
                                </>
                              )}
                            
                        />
                    </div>
                    <div className="col-lg-4 col-md-12 md-mb-30">
                        <FeatureSingle
                            itemClass="features-wrap"
                            itemImg={prismicH.asImageSrc(slice && slice.body[1].items[1].slidersubpic)}
                            itemTitle= {document && (
                                <>
                                  <span>
                                    {prismicR.asText(
                                      slice && slice.body[1].items[1].slidersubtitle
                                    )}
                                  </span>
                                </>
                              )}
                        />
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <FeatureSingle
                            itemClass="features-wrap"
                            itemImg={prismicH.asImageSrc(slice && slice.body[1].items[1].slidersubpic)}
                            itemTitle= {document && (
                                <>
                                  <span>
                                    {prismicR.asText(
                                      slice && slice.body[1].items[2].slidersubtitle
                                    )}
                                  </span>
                                </>
                              )}
                         
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureStyle1