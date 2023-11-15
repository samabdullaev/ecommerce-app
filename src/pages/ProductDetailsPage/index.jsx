import React from 'react'
import QuickViewContent from '../../containers/QuickViewContent'
import productsData from '../../data/products.data'

const ProductDetailsPage = () => {
  return (
    <>
  <div className="page-header breadcrumb-wrap">
    <div className="container">
      <div className="breadcrumb">
        <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
        <span /> <a href="shop-grid-right.html">Vegetables &amp; tubers</a> <span /> Seeds of Change Organic
      </div>
    </div>
  </div>
  <div className="container mb-30">
    <div className="row">
      <div className="col-xl-10 col-lg-12 m-auto">
        <div className="product-detail accordion-detail">
          <div className="row mb-50 mt-30">
            <QuickViewContent product={productsData[0]} isModal={false} />
          </div>
          <div className="product-info">
            <div className="tab-style3">
              <ul className="nav nav-tabs text-uppercase">
                <li className="nav-item">
                  <a className="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description">Description</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="Additional-info-tab" data-bs-toggle="tab" href="#Additional-info">Additional info</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="Vendor-info-tab" data-bs-toggle="tab" href="#Vendor-info">Vendor</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="Reviews-tab" data-bs-toggle="tab" href="#Reviews">Reviews (3)</a>
                </li>
              </ul>
              <div className="tab-content shop_info_tab entry-main-content">
                <div className="tab-pane fade show active" id="Description">
                  <div className>
                    <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
                    <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
                    <ul className="product-more-infor mt-30">
                      <li><span>Type Of Packing</span> Bottle</li>
                      <li><span>Color</span> Green, Pink, Powder Blue, Purple</li>
                      <li><span>Quantity Per Case</span> 100ml</li>
                      <li><span>Ethyl Alcohol</span> 70%</li>
                      <li><span>Piece In One</span> Carton</li>
                    </ul>
                    <hr className="wp-block-separator is-style-dots" />
                    <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p>
                    <h4 className="mt-30">Packaging &amp; Delivery</h4>
                    <hr className="wp-block-separator is-style-wide" />
                    <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                    <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                    <h4 className="mt-30">Suggested Use</h4>
                    <ul className="product-more-infor mt-30">
                      <li>Refrigeration not necessary.</li>
                      <li>Stir before serving</li>
                    </ul>
                    <h4 className="mt-30">Other Ingredients</h4>
                    <ul className="product-more-infor mt-30">
                      <li>Organic raw pecans, organic raw cashews.</li>
                      <li>This butter was produced using a LTG (Low Temperature Grinding) process</li>
                      <li>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</li>
                    </ul>
                    <h4 className="mt-30">Warnings</h4>
                    <ul className="product-more-infor mt-30">
                      <li>Oil separation occurs naturally. May contain pieces of shell.</li>
                    </ul>
                  </div>
                </div>
                <div className="tab-pane fade" id="Additional-info">
                  <table className="font-md">
                    <tbody>
                      <tr className="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                      <tr className="folded-wo-wheels">
                        <th>Folded (w/o wheels)</th>
                        <td>
                          <p>32.5″L x 18.5″W x 16.5″H</p>
                        </td>
                      </tr>
                      <tr className="folded-w-wheels">
                        <th>Folded (w/ wheels)</th>
                        <td>
                          <p>32.5″L x 24″W x 18.5″H</p>
                        </td>
                      </tr>
                      <tr className="door-pass-through">
                        <th>Door Pass Through</th>
                        <td>
                          <p>24</p>
                        </td>
                      </tr>
                      <tr className="frame">
                        <th>Frame</th>
                        <td>
                          <p>Aluminum</p>
                        </td>
                      </tr>
                      <tr className="weight-wo-wheels">
                        <th>Weight (w/o wheels)</th>
                        <td>
                          <p>20 LBS</p>
                        </td>
                      </tr>
                      <tr className="weight-capacity">
                        <th>Weight Capacity</th>
                        <td>
                          <p>60 LBS</p>
                        </td>
                      </tr>
                      <tr className="width">
                        <th>Width</th>
                        <td>
                          <p>24″</p>
                        </td>
                      </tr>
                      <tr className="handle-height-ground-to-handle">
                        <th>Handle height (ground to handle)</th>
                        <td>
                          <p>37-45″</p>
                        </td>
                      </tr>
                      <tr className="wheels">
                        <th>Wheels</th>
                        <td>
                          <p>12″ air / wide track slick tread</p>
                        </td>
                      </tr>
                      <tr className="seat-back-height">
                        <th>Seat back height</th>
                        <td>
                          <p>21.5″</p>
                        </td>
                      </tr>
                      <tr className="head-room-inside-canopy">
                        <th>Head room (inside canopy)</th>
                        <td>
                          <p>25″</p>
                        </td>
                      </tr>
                      <tr className="pa_color">
                        <th>Color</th>
                        <td>
                          <p>Black, Blue, Red, White</p>
                        </td>
                      </tr>
                      <tr className="pa_size">
                        <th>Size</th>
                        <td>
                          <p>M, S</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade" id="Vendor-info">
                  <div className="vendor-logo d-flex mb-30">
                    <img src="assets/imgs/vendor/vendor-18.svg" alt="" />
                    <div className="vendor-name ml-15">
                      <h6>
                        <a href="vendor-details-2.html">Noodles Co.</a>
                      </h6>
                      <div className="product-rate-cover text-end">
                        <div className="product-rate d-inline-block">
                          <div className="product-rating" style={{width: '90%'}} />
                        </div>
                        <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <ul className="contact-infor mb-50">
                    <li><img src="assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                    <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Contact Seller:</strong><span>(+91) - 540-025-553</span></li>
                  </ul>
                  <div className="d-flex mb-55">
                    <div className="mr-30">
                      <p className="text-brand font-xs">Rating</p>
                      <h4 className="mb-0">92%</h4>
                    </div>
                    <div className="mr-30">
                      <p className="text-brand font-xs">Ship on time</p>
                      <h4 className="mb-0">100%</h4>
                    </div>
                    <div>
                      <p className="text-brand font-xs">Chat response</p>
                      <h4 className="mb-0">89%</h4>
                    </div>
                  </div>
                  <p>Noodles &amp; Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles &amp; Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles &amp; Company locations across 29 states and Washington, D.C.</p>
                </div>
                <div className="tab-pane fade" id="Reviews">
                  {/*Comments*/}
                  <div className="comments-area">
                    <div className="row">
                      <div className="col-lg-8">
                        <h4 className="mb-30">Customer questions &amp; answers</h4>
                        <div className="comment-list">
                          <div className="single-comment justify-content-between d-flex mb-30">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img src="assets/imgs/blog/author-2.png" alt="" />
                                <a href="#" className="font-heading text-brand">Sienna</a>
                              </div>
                              <div className="desc">
                                <div className="d-flex justify-content-between mb-10">
                                  <div className="d-flex align-items-center">
                                    <span className="font-xs text-muted">December 4, 2022 at 3:12 pm </span>
                                  </div>
                                  <div className="product-rate d-inline-block">
                                    <div className="product-rating" style={{width: '100%'}} />
                                  </div>
                                </div>
                                <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <a href="#" className="reply">Reply</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="single-comment justify-content-between d-flex mb-30 ml-30">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img src="assets/imgs/blog/author-3.png" alt="" />
                                <a href="#" className="font-heading text-brand">Brenna</a>
                              </div>
                              <div className="desc">
                                <div className="d-flex justify-content-between mb-10">
                                  <div className="d-flex align-items-center">
                                    <span className="font-xs text-muted">December 4, 2022 at 3:12 pm </span>
                                  </div>
                                  <div className="product-rate d-inline-block">
                                    <div className="product-rating" style={{width: '80%'}} />
                                  </div>
                                </div>
                                <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <a href="#" className="reply">Reply</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img src="assets/imgs/blog/author-4.png" alt="" />
                                <a href="#" className="font-heading text-brand">Gemma</a>
                              </div>
                              <div className="desc">
                                <div className="d-flex justify-content-between mb-10">
                                  <div className="d-flex align-items-center">
                                    <span className="font-xs text-muted">December 4, 2022 at 3:12 pm </span>
                                  </div>
                                  <div className="product-rate d-inline-block">
                                    <div className="product-rating" style={{width: '80%'}} />
                                  </div>
                                </div>
                                <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <a href="#" className="reply">Reply</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <h4 className="mb-30">Customer reviews</h4>
                        <div className="d-flex mb-30">
                          <div className="product-rate d-inline-block mr-15">
                            <div className="product-rating" style={{width: '90%'}} />
                          </div>
                          <h6>4.8 out of 5</h6>
                        </div>
                        <div className="progress">
                          <span>5 star</span>
                          <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                        </div>
                        <div className="progress">
                          <span>4 star</span>
                          <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                        </div>
                        <div className="progress">
                          <span>3 star</span>
                          <div className="progress-bar" role="progressbar" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>45%</div>
                        </div>
                        <div className="progress">
                          <span>2 star</span>
                          <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>65%</div>
                        </div>
                        <div className="progress mb-30">
                          <span>1 star</span>
                          <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                        </div>
                        <a href="#" className="font-xs text-muted">How are ratings calculated?</a>
                      </div>
                    </div>
                  </div>
                  {/*comment form*/}
                  <div className="comment-form">
                    <h4 className="mb-15">Add a review</h4>
                    <div className="product-rate d-inline-block mb-30" />
                    <div className="row">
                      <div className="col-lg-8 col-md-12">
                        <form className="form-contact comment_form" action="#" id="commentForm">
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group">
                                <textarea className="form-control w-100" name="comment" id="comment" cols={30} rows={9} placeholder="Write Comment" defaultValue={""} />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <button type="submit" className="button button-contactForm">Submit Review</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default ProductDetailsPage