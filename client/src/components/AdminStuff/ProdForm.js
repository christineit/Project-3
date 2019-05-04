import React from "react"
import { Jumbotron, Container } from 'reactstrap';
import CreateProductForm from './CreateProductForm';
import API from "../../utils/API";

export default class ProductCreate extends React.Component {


    state = {
        productname: "",
        category: "",
        size: "",
        quantity: 0,
        description: "",
        price: 0,
        images: "",
        keywords: "",
        isSelling: false

    };
    // componentDidMount() {
    //     this.loadProduct(id);
    //   }
    //   loadProduct= id => {
    //     API.getProduct(id)
    //       .then(res =>
    //         this.setState({ productData: res.data}, {isSelling:true},
    //             console.log(res.data))
    //       )
    //       .catch(err => console.log(err));
    //   }

    handleInputChange = e => {
        let value = e.target.value;
        let yeet = e.target.name;
        let re = /^[0-9\b]+$/;

        if (e.target.type === "number" && !isNaNs(value)) {

            this.setState({
                [yeet]: value
            })
        }

        if (e.target.type === "text" && !isNaN(value)) {
            console.log("okee")

        }
        else {
            console.log("inputs a letter")
            this.setState({
                [yeet]: value
            })
        }
        // if(yeet ==="price" && re)


    }

   
    handleFormSubmit = e => {
        e.preventDefault();
        let formData = {
            productname: this.state.productname,
            category: this.state.category,
            size: this.state.size,
            quantity: this.state.quantity,
            description: this.state.description,
            price: this.state.price,
            images: this.state.images,
            keywords:this.state.keywords
         }   
         console.log("line 41 prodform.js" , formData);
         
        API
        .saveProduct(formData)
        .then(res => console.log("Book Saved, line 45 prodform.js"))
        .catch(err => console.log(err));
         console.log(this.state)
    }

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Sell A Product</h1>
                        <p className="lead">Specify product details below, then submit product to site</p>
                        <CreateProductForm
                            handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}

                        />
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}