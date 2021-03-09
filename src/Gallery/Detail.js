import React from 'react'
import './Detail.css'
import  { Component } from 'react'

export default class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {addClass: false,addClass1:false,addClass2:false,addClass3:false,addClass1box:false,addClass1box1:false,
            addClass1box2:false,addClass1box3:false,addClass2box:false,addClass2box1:false,addClass3box:false,addClass3box1:false}
      }
      toggle() {
        this.setState({addClass: !this.state.addClass});
      }
      toggle1() {
        this.setState({addClass1: !this.state.addClass1});
      }
      toggle2() {
        this.setState({addClass2: !this.state.addClass2});
      }
      toggle3() {
        this.setState({addClass3: !this.state.addClass3});
      }
      toggle1box(){
        this.setState({addClass1box: !this.state.addClass1box});
      }
      toggle1box1(){
        this.setState({addClass1box1: !this.state.addClass1box1});
      }
      toggle1box2(){
        this.setState({addClass1box2: !this.state.addClass1box2});
      }
      toggle1box3(){
        this.setState({addClass1box3: !this.state.addClass1box3});
      }
      toggle2box(){
        this.setState({addClass2box: !this.state.addClass2box});
      }
      toggle2box1(){
        this.setState({addClass2box1: !this.state.addClass2box1});
      }
      toggle3box(){
        this.setState({addClass3box: !this.state.addClass3box});
      }
      toggle3box1(){
        this.setState({addClass3box1: !this.state.addClass3box1});
      }
      blur(){
          this.setState()
      }
    render() {
        let boxClass = ["box"];
        let boxClass1 = ["box"];
        let boxClass2 = ["box"];
        let boxClass3 = ["box"];
        let box1Class = ["box1"];
        let box1Class1 = ["box1"]; 
        let box1Class2 = ["box1"]; 
        let box1Class3 = ["box1"]; 
        let box2Class = ["box2"];
        let box2Class1 = ["box2"];
        let box3Class = ["box3"];
        let box3Class1 = ["box3"];
        if(this.state.addClass) {
          boxClass.push('scale');
        }
        if(this.state.addClass1) {
            boxClass1.push('scale');
          }
          if(this.state.addClass2) {
            boxClass2.push('scale');
          }
          if(this.state.addClass3) {
            boxClass3.push('scale');
          }
          if(this.state.addClass1box) {
            box1Class.push('scale');
          }
          if(this.state.addClass1box1) {
            box1Class1.push('scale');
          }
          if(this.state.addClass1box2) {
            box1Class2.push('scale');
          }
          if(this.state.addClass1box3) {
            box1Class3.push('scale');
          }
          if(this.state.addClass2box) {
            box2Class.push('scale');
          }
          if(this.state.addClass2box1) {
            box2Class1.push('scale');
          }
          if(this.state.addClass3box) {
            box3Class.push('scale');
          }
          if(this.state.addClass3box1) {
            box3Class1.push('scale');
          }
        return (
            <div>
                <div>
           <div className="detailcontainer">
               <div className="detailheader">
                   <h1>Gallery</h1>
               </div>
               <div className="gallerydetail">
                    <div className={box1Class.join(' ')}><img src="images/russia.jpg"  onClick={this.toggle1box.bind(this)} id="img1" /></div>
                    <div className={boxClass.join(' ')}><img src="images/tacmahal.jpg" onClick={this.toggle.bind(this)} id="img2"/></div>
                    <div className={boxClass1.join(' ')}><img src="images/sultanahmet.jpg" onClick={this.toggle1.bind(this)} id="img3"/></div>
                    <div className={box1Class1.join(' ')}><img src="images/rome.jpg" onClick={this.toggle1box1.bind(this)} id="img4"/></div>
                    <div className={box2Class.join(' ')}><img src="images/us.jpg" onClick={this.toggle2box.bind(this)} id="img5"/></div>
                    <div className={box3Class.join(' ')}><img src="images/spain.jpg" onClick={this.toggle3box.bind(this)} id="img6"/></div>
                    <div className={box3Class1.join(' ')}><img src="images/katedral.jpg" onClick={this.toggle3box1.bind(this)} id="img7"/></div>
                    <div className={box2Class1.join(' ')}><img src="images/dancing.jpg" onClick={this.toggle2box1.bind(this)} id="img8"/></div>
                    <div className={box1Class2.join(' ')}><img src="images/lotus.jpg" onClick={this.toggle1box2.bind(this)} id="img9"/></div>
                    <div className={boxClass2.join(' ')}><img src="images/dubai.jpg" onClick={this.toggle2.bind(this)} id="img10"/></div>
                    <div className={boxClass3.join(' ')}><img src="images/avustralya.jpg" onClick={this.toggle3.bind(this)} id="img11"/></div>
                    <div className={box1Class3.join(' ')}><img src="images/Seashell.jpg" onClick={this.toggle1box3.bind(this)} id="img12"/></div>
               </div>
           </div>
        </div>
            </div>
        )
    }
}


