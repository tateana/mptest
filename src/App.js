import React, {Component} from "react";
import Rate from "./Rate"


export default class App extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="layout-block">
            


            <div className="current-rates">
                <div className="rates-content">
                    <h2 id="section-rates" className="title">Current mortgage rates REACT</h2>
                    
        
        <div className="rates">
            <Rate name="LIBOR mortgage from" value="0.56" />
            <Rate name="Fixed-rate 10 years from" value="1.09" />
            <Rate name="Fixed-rate 5 years from" value="0.63" />
        </div>
        
                    <div>
                        <button
                            type="button"
                            className="link-more"
                            ng-click="showRatesModal()">
                            <span className="text">View all rates</span>
                            <span className="icon-popup"></span>
                        </button>
                        <custom-popover template="The displayed interest rates are the best rates currently available. Your personal interest rates may vary depending on LTV, affordability, mortgage amount and the location of the property."></custom-popover>
                    </div>
                </div>
                <p className="notes">
                    The displayed interest rates are the best rates currently available. Your personal interest rates may vary depending on LTV, affordability, mortgage amount and the location of the property.
                </p>
                <div className="button-wrap">
                    <a href="/en/the-simplest-way/form/" className="button button--secondary">
                        <span className="text">Calculate your personalized rates</span>
                        <span className="icon-rates"></span>
                    </a>
                </div>
            </div>
        
        
                </div>
        
                
                <div className="layout-block">
                    <div className="max-purchase-calculator">
                        <div className="flex-row">
                            <h3 className="sub-title">How much rent do you pay per month?</h3>
                            <h3 className="sub-title">Our calculators</h3>
                        </div>
        
                        <div className="row">
                            <div className="col-l6 col-m5 col-s12 col">
                                
        
        
        <div className="wrap">
            <div className="income-content"></div>
            <p className="desc-afford">You can afford:</p>
            <div className="max-purchase-block">
                <span className="currency">CHF</span>
                <span className="value">
                    <input type="text" format="number" ng-model="maxObjectPrice" readOnly />
                </span>
            </div>
            <div className="desc">
                <span className="text">
                    Based on
                    <span className="currency">CHF</span>
                    <input className="own-funds" type="text" format="number" ng-model="ownFunds" readOnly />
                    own funds
                </span>
                <custom-popover template="Select your monthly rental payments by using the slider. Now you will see a guideline value for the maximum purchase price that you can afford when buying a property. The calculation is based on the assumption that your loan-to-value ratio is 80%, which means that you are able to finance 20% of the purchase price via your own funds."></custom-popover>
            </div>
            <div className="link-wrap">
                <button
                        type="button"
                        className="link-more"
                        ng-click="showAssumptionsModal()">
                    <span className="text">Learn more</span>
                    <svg className="svg-popup" width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.56 18.94">
            <path className="cls-1" d="M16.19 18.94H0V6.38h4.34v2H2v8.56h12.19v-2.41h2v4.41z"/>
            <path className="cls-1" d="M22.56 12.56H6.38V0h16.18zm-14.18-2h12.18V2H8.38z"/>
        </svg>
        
                </button>
            </div>
        </div>
        
                            </div>
                            <div className="col-l6 col-m7 col-s12 col">
                                <h3 className="sub-title" hidden>Our calculators</h3>
                                <ul className="calculators-list">
                                    <li>
                                        <a href="/en/mortgage/calculator/">Mortgage calculator</a>
                                        <custom-popover template="Get an overview of the most important key figures when buying a property."></custom-popover>
                                    </li>
                                    <li>
                                        <a href="/en/mortgage/affordability-calculator/">Affordability calculator</a>
                                        <custom-popover template="Learn whether a certain property is affordable based on your gross income."></custom-popover>
                                    </li>
                                    <li>
                                        <a href="/en/mortgage/ltv-calculator/">LTV calculator</a>
                                        <custom-popover template="Learn whether your own funds are sufficient for buying a property."></custom-popover>
                                    </li>
                                    <li>
                                        <a href="/en/mortgage/savings-calculator/">Mortgage savings calculator</a>
                                        <custom-popover template="Learn how much you can safe with a favorable interest rate compared to an average interest rate."></custom-popover>
                                    </li>
                                    <li>
                                        <a href="/en/mortgage/purchase-calculator/">Purchase price calculator</a>
                                        <custom-popover template="Get a guideline value for the maximum purchase price of a property based on your gross income and your own funds."></custom-popover>
                                    </li>
                                    <li>
                                        <a href="/en/mortgage/refinancing-calculator/">Refinancing calculator</a>
                                        <custom-popover template="Learn how much you can save when refinancing an existing mortgage."></custom-popover>
                                    </li>
                                    <li>
                                        <a href="/en/mortgage/buy-or-rent-calculator/">Buy or rent calculator</a>
                                        <custom-popover template="Learn whether you can save money by buying a property or if renting an apartment or house makes more sense in your situation."></custom-popover>
                                    </li>
                                    <li>
                                        <a href="/en/mortgage/amortization-calculator/">Amortization calculator</a>
                                        <custom-popover template="Learn whether an amortization of your mortgage offers a financial benefit."></custom-popover>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <a href="/en/the-simplest-way/first-a/"
                           className="button button--secondary">
                            <span className="text">Request advice</span>
                            <span className="icon-person"></span>
                        </a>
                    </div>
                </div>
                
        
                <section className="layout-block">
                    <div className="layout-wrap">
                        
        
        
        <h2 className="title">
            
                Get the best mortgage in 3 easy steps
            
        </h2>
        <ul className="process-steps"><li className="item"><p className="doc-title">
                        
                            1. Contact us
                        
                    </p><p className="desc">
                        
                            After the first contact, your personal advisor reviews your property project.
                        
                    </p></li><li className="item"><p className="doc-title">
                        
                            2. Get advice
                        
                    </p><p className="desc">
                        
                            Together we find the optimal financing solution for your dream home.
                        
                    </p></li><li className="item"><p className="doc-title">
                        
                            3. Sign the contract
                        
                    </p><p className="desc">
                        
                            We take care of all the paperwork and answer any questions you might have, even after the signing of the contract.
                        
                    </p></li></ul>
        
                    </div>
                </section>
            </React.Fragment>
        )
   }
}



