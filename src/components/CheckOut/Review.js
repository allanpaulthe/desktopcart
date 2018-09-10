import React, { Component } from 'react';
import '../../assets/style/CheckOut/review.less';
import { Icon } from 'react-icons-kit';
import { ic_edit } from 'react-icons-kit/md/ic_edit';
import { connect } from 'react-redux';

class DelAddress extends Component {
    state = {}
    render() {
        return (
            <div>
                <p className="data">
                    {this.props.adress.name}
                </p>
                <p className="data">
                    {this.props.adress.street}

                </p>
                <p className="data">
                    {this.props.adress.building}
                </p>
                <p className="data">
                    {this.props.adress.phno}
                </p>
            </div>
        );
    }
}

class ReviewSummary extends Component {
    state = {}
    render() {
        return (
            <div className="summary">
                <div className="one">
                    <h1>Subtotal</h1>
                    <p>{'$' + this.props.sum}</p>
                </div>
                <div className="one">
                    <h1>Shipping</h1>
                    <p>FREE</p>
                </div>
                <div className="one">
                    <h1>Expected Delivery</h1>
                    <p>Apr 20 - 28</p>
                </div>
                <div className="one">
                    <h1>Taxes</h1>
                    <p>$11.55</p>
                </div>
                <div className="one black">
                    <h1>Total</h1>
                    <p>{'$' + (this.props.sum + 11.55)}</p>
                </div>
            </div>
        );
    }
}


class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delEdit: false,
            cardEdit: false,
            billEdit: false,
            sameBillAdress: true
        };
    }
    delEdit() {
        this.setState({
            delEdit: true
        })
    }
    cardEdit() {
        this.setState({
            cardEdit: true
        })
    }
    billEdit() {
        this.setState({
            billEdit: true
        })
    }
    componentDidMount() {
        const bAdress = {};
        bAdress.bname = this.props.adress.name
        bAdress.bstreet = this.props.adress.street
        bAdress.bbuilding = this.props.adress.building
        bAdress.bphno = this.props.adress.phno
        this.setState({
            adress: this.props.adress,
            billAdress: bAdress
        })
    }
    editAdress(e) {
        const value = e.target.value;
        const adress = this.state.adress;
        adress[e.target.name] = value;
        this.setState({
            adress: adress
        })
    }
    editBillAdress(e) {
        const value = e.target.value;
        const billAdress = this.state.billAdress;
        billAdress[e.target.name] = value;
        this.setState({
            billAdress: billAdress
        })
    }
    changeDelAdress() {
        this.setState({
            delEdit: false
        })
    }
    changeBillAdress() {
        this.setState({
            billEdit: false,
            sameBillAdress: false
        })
    }
    changeCard() {
        this.setState({
            cardEdit: false
        })
    }
    render() {
        const adress = this.props.adress;
        const cart = [...this.props.cart];
        const products = this.props.products;
        var sum = 0;
        cart.forEach(el => {
            const count = el.count;
            const price = products[el.id - 1].price;
            sum += (count * price)
        });
        return (
            <div className="revieww">
                <div className="top flex-v-center">
                    <h1>Shipping to:</h1>
                    <Icon icon={ic_edit} onClick={this.delEdit.bind(this)} />
                    <div className="edit-blue" onClick={this.delEdit.bind(this)}>EDIT</div>
                </div>
                {!this.state.delEdit &&
                    <DelAddress adress={adress} />
                }
                {this.state.delEdit &&
                    <div className="flex-v-center">
                        <div className="edit">
                            <input type="text" value={this.state.adress.name} name="name" onChange={this.editAdress.bind(this)} />
                            <input type="text" value={this.state.adress.street} name="street" onChange={this.editAdress.bind(this)} />
                            <input type="text" value={this.state.adress.building} name="building" onChange={this.editAdress.bind(this)} />
                            <input type="text" value={this.state.adress.phno} name="phno" onChange={this.editAdress.bind(this)} />
                        </div>
                        <button onClick={this.changeDelAdress.bind(this)}>Change</button>
                    </div>
                }
                <div className="top flex-v-center">
                    <h1>Payment Method:</h1>
                    <Icon icon={ic_edit} onClick={this.cardEdit.bind(this)} />
                    <div className="edit-blue" onClick={this.cardEdit.bind(this)}>EDIT</div>
                </div>
                {!this.state.cardEdit &&
                    <p className="data">
                        VISA ending in 8765
                    </p>
                }
                {this.state.cardEdit &&
                    <div className="flex-v-center">
                        <div className="edit">
                            <input type="text" />
                        </div>
                        <button onClick={this.changeCard.bind(this)}>Change</button>
                    </div>
                }
                <div className="top flex-v-center">
                    <h1>Billing Address</h1>
                    <Icon icon={ic_edit} onClick={this.billEdit.bind(this)} />
                    <div className="edit-blue" onClick={this.billEdit.bind(this)}>EDIT</div>
                </div>
                {!this.state.billEdit &&
                    <div>
                        {this.state.sameBillAdress &&
                            <p className="data">
                                Same as shipping address
                            </p>
                        }
                        {!this.state.sameBillAdress &&
                            <div>
                                <p className="data">
                                    {this.state.billAdress.bname}
                                </p>
                                <p className="data">
                                    {this.state.billAdress.bstreet}

                                </p>
                                <p className="data">
                                    {this.state.billAdress.bbuilding}
                                </p>
                                <p className="data">
                                    {this.state.billAdress.bphno}
                                </p>
                            </div>
                        }
                    </div>
                }
                {this.state.billEdit &&
                    <div className="flex-v-center">
                        <div className="edit">
                            <input type="text" value={this.state.billAdress.bname} name="bname" onChange={this.editBillAdress.bind(this)} />
                            <input type="text" value={this.state.billAdress.bstreet} name="bstreet" onChange={this.editBillAdress.bind(this)} />
                            <input type="text" value={this.state.billAdress.bbuilding} name="bbuilding" onChange={this.editBillAdress.bind(this)} />
                            <input type="text" value={this.state.billAdress.bphno} name="bphno" onChange={this.editBillAdress.bind(this)} />
                        </div>
                        <button onClick={this.changeBillAdress.bind(this)}>Change</button>
                    </div>
                }
                <div className="line"></div>
                <ReviewSummary sum={sum} />
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        adress: state.userAdress,
        cart: state.cart,
        products: state.products,
        cartCount: state.cartCount
    };
};


export default connect(mapStateToProps, null)(Review);
