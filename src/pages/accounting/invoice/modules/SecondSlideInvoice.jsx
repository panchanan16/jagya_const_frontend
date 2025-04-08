import SecondSlideLayout from "@/layout/common/secondSlideLayout";

function SecondSlideInvoice() {
  return (
    <SecondSlideLayout>
        <main>
          <div class="main-btn flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="arrow-left"
              class="main-svg"
              onclick="openProjectDetails('first-slide', this)"
            >
              <path
                fill=""
                d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"
              ></path>
            </svg>
          </div>

          <div class="invoice-section">
            <div class="invoice-header flex j-between align-center">
              <div class="company-logo">
                <img src="/img/logo.png" alt="logo" loading="lazy" />
              </div>
              <div class="invoice-name">
                <h1>Invoice</h1>
              </div>
            </div>
            <div class="invoice-title flex align-center j-between">
              <div class="company-address">
                <h3>Jagya Construction</h3>
                <h3>Six Mile, Guwahati, Assam</h3>
                <h3>PIN-782001</h3>
              </div>
              <div class="invoice-details">
                <div class="line-1 flex align-center">
                  <h3>Invoice No.</h3>
                  <p class="text">
                    JAG-<span>001</span>
                  </p>
                </div>
                <div class="line-1 flex align-center">
                  <h3>Invoice Date</h3>
                  <p class="text">19-03-2025</p>
                </div>
              </div>
            </div>

            <div class="invoice-address">
              <h2>Billed to</h2>
              <p class="text">Panchanan Deka</p>
              <p class="text">Nagaon, Assam</p>
              <p class="text">+91 6000192289</p>
            </div>

            <div class="invoice-table">
              <table>
                <thead>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>GST Rate</th>
                  <th>Amount</th>
                  <th>Total</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Bricks</td>
                    <td>10</td>
                    <td>1000</td>
                    <td>18%</td>
                    <td>180</td>
                    <td>&#8377; 1180</td>
                  </tr>
                  <tr>
                    <td>Cement</td>
                    <td>10</td>
                    <td>1000</td>
                    <td>18%</td>
                    <td>180</td>
                    <td>&#8377; 1180</td>
                  </tr>
                  <tr>
                    <td colspan="4"></td>
                    <td colspan="2">
                      <table>
                        <tbody>
                          <tr>
                            <td>Subtotal</td>
                            <td>&#8377; 2360</td>
                          </tr>
                          <tr>
                            <td>
                              GST <span>(18%)</span>
                            </td>
                            <td>&#8377; 360</td>
                          </tr>
                          <tr>
                            <td>Discount</td>
                            <td>&#8377; 0</td>
                          </tr>
                          <tr>
                            <td>Total</td>
                            <td>&#8377; 2360</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="invoice-terms flex j-between">
              <div class="terms-text">
                <h2>Terms & Conditions</h2>
                <div class="terms">
                  <p class="text">Payment is due within 15 days</p>
                </div>
              </div>
              <div class="authorized-signature">
                <div class="authorized-img">
                  <img
                    src="/img/signature.jpg"
                    alt="signature"
                    loading="lazy"
                  />
                </div>
                <h2>Authorized Signature</h2>
                <p class="text">Thank You for doing business with us</p>
              </div>
            </div>

            <div class="invoice-footer flex align-center">
              <p class="text">Jagya Construction</p>
              <p>|</p>
              <p class="text">+91 6000192289</p>
              <p>|</p>
              <p class="text">jagyaconstruction@gmail.com</p>
            </div>
          </div>
        </main>
    </SecondSlideLayout>
  );
}

export default SecondSlideInvoice;
