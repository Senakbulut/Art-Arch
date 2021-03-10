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

    render() {
        let boxClass = ["box"];let boxClass1 = ["box"];let boxClass2 = ["box"]; let boxClass3 = ["box"];
        let box1Class = ["box1"];let box1Class1 = ["box1"]; let box1Class2 = ["box1"]; let box1Class3 = ["box1"]; 
        let box2Class = ["box2"];let box2Class1 = ["box2"];
        let box3Class = ["box3"];let box3Class1 = ["box3"];
        let blurclass = ["box"];   let blurclassv =["box"];    let blurclassve =["box"];     let blurclassver =["box"];   
        let blurclass1 = ["box1"]; let blurclassv1 =["box1"];  let blurclassve1 =["box1"];   let blurclassver1 =["box1"]; 
        let blurclass2 = ["box2"]; let blurclassv2 =["box2"];  let blurclassve2 =["box2"];   let blurclassver2 =["box2"]; 
        let blurclass3 = ["box3"]; let blurclassv3 = ["box3"]; let blurclassve3 = ["box3"];  let blurclassver3 = ["box3"];
        let blurclassvers =["box"];   let blurclassversi =["box"];    let blurclassversio =["box"];    let blurclassversion =["box"];    
        let blurclassvers1 =["box1"]; let blurclassversi1 =["box1"];   let blurclassversio1 =["box1"]; let blurclassversion1 =["box1"];  
        let blurclassvers2 =["box2"]; let blurclassversi2 =["box2"];   let blurclassversio2 =["box2"];  let blurclassversion2 =["box2"]; 
        let blurclassvers3 = ["box3"];let blurclassversi3 = ["box3"];   let blurclassversio3 =["box3"];  let blurclassversion3 =["box3"];
        let blurclassversions =["box"];    let blurclassversionsS =["box"];    let blurclassversionsSL =["box"];    let blurclassversionsSLX =["box"];    
        let blurclassversions1 =["box1"];  let blurclassversionsS1 =["box1"]; let blurclassversionsSL1 =["box1"];   let blurclassversionsSLX1 =["box1"];    
        let blurclassversions2 =["box2"];  let blurclassversionsS2 =["box2"]; let blurclassversionsSL2 =["box2"];   let blurclassversionsSLX2 =["box2"];    
        let blurclassversions3 =["box3"];  let blurclassversionsS3 =["box3"]; let blurclassversionsSL3 =["box3"];   let blurclassversionsSLX3 =["box3"];    
        let textclass=["box"];
        let textclass1=["box1"];
        let textclass2=["box2"];
        let textclass3=["box3"];
        if(this.state.addClass) {
          boxClass.push('scale');
          textclass.push('texts');
          blurclassv.push('blur');
          blurclassv1.push('blur');
          blurclassv2.push('blur');
          blurclassv3.push('blur');
        }
        if(this.state.addClass1) {
            boxClass1.push('scale');
            textclass.push('texts');
            blurclassve.push('blur');
            blurclassve1.push('blur');
            blurclassve2.push('blur');
            blurclassve3.push('blur');
          }
          if(this.state.addClass2) {
            boxClass2.push('scale');
            textclass.push('texts');
            blurclassversionsS.push('blur');
            blurclassversionsS1.push('blur');
            blurclassversionsS2.push('blur');
            blurclassversionsS3.push('blur');
          }
          if(this.state.addClass3) {
            boxClass3.push('scale');
            textclass.push('texts');
            blurclassversionsSL.push('blur');
            blurclassversionsSL1.push('blur');
            blurclassversionsSL2.push('blur');
            blurclassversionsSL3.push('blur');
          }
          if(this.state.addClass1box) {
            box1Class.push('scale');
            textclass1.push('texts');
            blurclass.push('blur');
            blurclass1.push('blur');
            blurclass2.push('blur');
            blurclass3.push('blur');
          }
          if(this.state.addClass1box1) {
            box1Class1.push('scale');
            textclass1.push('texts');
            blurclassver.push('blur');
            blurclassver1.push('blur');
            blurclassver2.push('blur');
            blurclassver3.push('blur');
          }
          if(this.state.addClass1box2) {
            box1Class2.push('scale');
            textclass1.push('texts');
            blurclassversions.push('blur');
            blurclassversions1.push('blur');
            blurclassversions2.push('blur');
            blurclassversions3.push('blur');
          }
          if(this.state.addClass1box3) {
            box1Class3.push('scale');
            textclass1.push('texts');
            blurclassversionsSLX.push('blur');
            blurclassversionsSLX1.push('blur');
            blurclassversionsSLX2.push('blur');
            blurclassversionsSLX3.push('blur');
          }
          if(this.state.addClass2box) {
            box2Class.push('scale');
            textclass2.push('texts');
            blurclassvers.push('blur');
            blurclassvers1.push('blur');
            blurclassvers2.push('blur');
            blurclassvers3.push('blur');
          }
          if(this.state.addClass2box1) {
            box2Class1.push('scale');
            textclass2.push('texts');
            blurclassversion.push('blur');
            blurclassversion1.push('blur');
            blurclassversion2.push('blur');
            blurclassversion3.push('blur');
          }
          if(this.state.addClass3box) {
            box3Class.push('scale');
            textclass3.push('texts');
            blurclassversi.push('blur');
            blurclassversi1.push('blur');
            blurclassversi2.push('blur');
            blurclassversi3.push('blur');
          }
          if(this.state.addClass3box1) {
            box3Class1.push('scale');
            textclass3.push('texts');
            blurclassversio.push('blur');
            blurclassversio1.push('blur');
            blurclassversio2.push('blur');
            blurclassversio3.push('blur');
          }
          
        return (
            <div>
                <div>
           <div className="detailcontainer">
               <div className="detailheader">
                   <h1>Gallery</h1>
               </div>
               <div className="gallerydetail">
                    <div className={`${box1Class.join(' ')} ${blurclassv1.join(' ')} ${blurclassve1.join(' ')} ${blurclassver1.join(' ')} ${blurclassvers1.join(' ')} ${blurclassversi1.join(' ')} ${blurclassversio1.join(' ')} ${blurclassversion1.join(' ')} ${blurclassversions1.join(' ')} ${blurclassversionsS1.join(' ')} ${blurclassversionsSL1.join(' ')} ${blurclassversionsSLX1.join(' ')}`}><img src="images/russia.jpg" onClick={this.toggle1box.bind(this)} id="img1"/><div className={textclass1.join(' ')}><h1>Saint Basil's Cathedrall</h1><p>The Cathedral of Vasily the Blessed  commonly known as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia. The building, now a museum, is officially known as the Cathedral of the Intercession of the Most Holy Theotokos on the Moat, or Pokrovsky Cathedral.</p></div></div>
                    <div className={`${boxClass.join(' ')} ${blurclass.join(' ')} ${blurclassve.join(' ')} ${blurclassver.join(' ')} ${blurclassvers.join(' ')} ${blurclassversi.join(' ')} ${blurclassversio.join(' ')} ${blurclassversion.join(' ')} ${blurclassversions.join(' ')} ${blurclassversionsS.join(' ')} ${blurclassversionsSL.join(' ')} ${blurclassversionsSLX.join(' ')}`} ><img src="images/tacmahal.jpg" onClick={this.toggle.bind(this)} id="img2"/><div className={textclass.join(' ')}><h1>Taj Mahal</h1><p>Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.</p></div></div>
                    <div className={`${boxClass1.join(' ')} ${blurclass.join(' ')} ${blurclassv.join(' ')} ${blurclassver.join(' ')} ${blurclassvers.join(' ')} ${blurclassversi.join(' ')} ${blurclassversio.join(' ')} ${blurclassversion.join(' ')} ${blurclassversions.join(' ')} ${blurclassversionsS.join(' ')} ${blurclassversionsSL.join(' ')} ${blurclassversionsSLX.join(' ')}`}><img src="images/sultanahmet.jpg" onClick={this.toggle1.bind(this)} id="img3"/><div className={textclass.join(' ')}><h1>Sultan Ahmed Mosque</h1><p>Sultan Ahmed Mosque (Turkish: Sultan Ahmet Camii), also known as the Blue Mosque, is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb, a madrasah and a hospice. </p></div></div>
                    <div className={`${box1Class1.join(' ')} ${blurclass1.join(' ')} ${blurclassv1.join(' ')} ${blurclassve1.join(' ')} ${blurclassvers1.join(' ')} ${blurclassversi1.join(' ')} ${blurclassversio1.join(' ')} ${blurclassversion1.join(' ')} ${blurclassversions1.join(' ')} ${blurclassversionsS1.join(' ')} ${blurclassversionsSL1.join(' ')} ${blurclassversionsSLX1.join(' ')}`}><img src="images/rome.jpg" onClick={this.toggle1box1.bind(this)} id="img4"/><div className={textclass1.join(' ')}><h1>Colosseum</h1><p>The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum and is the largest ancient amphitheatre ever built, and is still the largest standing amphitheater in the world today, despite its age. The Colosseum is built of travertine limestone, tuff (volcanic rock), and brick-faced concrete.</p></div></div>
                    <div className={`${box2Class.join(' ')} ${blurclass2.join(' ')} ${blurclassv2.join(' ')} ${blurclassve2.join(' ')} ${blurclassver2.join(' ')} ${blurclassversi2.join(' ')} ${blurclassversio2.join(' ')} ${blurclassversion2.join(' ')} ${blurclassversions2.join(' ')} ${blurclassversionsS2.join(' ')} ${blurclassversionsSL2.join(' ')} ${blurclassversionsSLX2.join(' ')}`}><img src="images/us.jpg" onClick={this.toggle2box.bind(this)} id="img5"/><div className={textclass2.join(' ')}><h1>Flatiron Building</h1><p>The Flatiron Building, originally the Fuller Building,is a triangular 22-story,285-foot-tall (86.9 m) steel-framed landmarked building located at 175 Fifth Avenue in the Flatiron District neighborhood of the borough of Manhattan, New York City. Designed by Daniel Burnham and Frederick Dinkelberg, it was one of the tallest buildings in the city upon its 1902 completion, at 20 floors high, and one of only two "skyscrapers" north of 14th Street – the other being the Metropolitan Life Insurance Company Tower, one block east.</p></div></div>
                    <div className={`${box3Class.join(' ')} ${blurclass3.join(' ')} ${blurclassv3.join(' ')} ${blurclassve3.join(' ')} ${blurclassver3.join(' ')} ${blurclassvers3.join(' ')} ${blurclassversio3.join(' ')} ${blurclassversion3.join(' ')} ${blurclassversions3.join(' ')} ${blurclassversionsS3.join(' ')} ${blurclassversionsSL3.join(' ')} ${blurclassversionsSLX3.join(' ')}`}><img src="images/spain.jpg" onClick={this.toggle3box.bind(this)} id="img6"/><div className={textclass3.join(' ')}><h1>Casa Milà</h1><p>Casa Milà popularly known as La Pedrera or "The stone quarry", a reference to its unconventional rough-hewn appearance, is a modernist building in Barcelona, Catalonia, Spain. It was the last private residence designed by architect Antoni Gaudí and was built between 1906 and 1912.The building was commissioned in 1906 by Pere Milà and his wife Roser Segimon. At the time, it was controversial because of its undulating stone facade, twisting wrought iron balconies and designed by Josep Maria Jujol. Several structural innovations include a self-supporting stone façade, and a free-plan floor, underground garage and the spectacular terrace on the roof.</p></div></div>
                    <div className={`${box3Class1.join(' ')} ${blurclass3.join(' ')} ${blurclassv3.join(' ')} ${blurclassve3.join(' ')} ${blurclassver3.join(' ')} ${blurclassvers3.join(' ')} ${blurclassversi3.join(' ')} ${blurclassversion3.join(' ')} ${blurclassversions3.join(' ')} ${blurclassversionsS3.join(' ')} ${blurclassversionsSL3.join(' ')} ${blurclassversionsSLX3.join(' ')}`}><img src="images/katedral.jpg" onClick={this.toggle3box1.bind(this)} id="img7"/><div className={textclass3.join(' ')}><h1>Cologne Cathedral</h1><p> Cologne Cathedral is a Catholic cathedral in Cologne, North Rhine-Westphalia, Germany. It is the seat of the Archbishop of Cologne and of the administration of the Archdiocese of Cologne. It is a renowned monument of German Catholicism and Gothic architecture and was declared a World Heritage Site in 1996. It is the largest Gothic church in Northern Europe and has the second-tallest spires. The towers for its two huge spires give the cathedral the largest façade of any church in the world. The choir has the largest height to width ratio, 3.6:1, of any medieval church.</p></div></div>
                    <div className={`${box2Class1.join(' ')} ${blurclass2.join(' ')} ${blurclassv2.join(' ')} ${blurclassve2.join(' ')} ${blurclassver2.join(' ')} ${blurclassvers2.join(' ')} ${blurclassversi2.join(' ')} ${blurclassversio2.join(' ')} ${blurclassversions2.join(' ')} ${blurclassversionsS2.join(' ')} ${blurclassversionsSL2.join(' ')} ${blurclassversionsSLX2.join(' ')}`}><img src="images/dancing.jpg" onClick={this.toggle2box1.bind(this)} id="img8"/><div className={textclass2.join(' ')}><h1>Dancing House</h1><p>The Dancing House or Fred and Ginger, is the nickname given to the Nationale-Nederlanden building on the Rašínovo nábřeží (Rašín Embankment) in Prague, Czech Republic. It was designed by the Croatian-Czech architect Vlado Milunić in cooperation with Canadian-American architect Frank Gehry on a vacant riverfront plot. The building was designed in 1992. The construction, carried out by BESIX, was completed four years later in 1996.The non-traditional design was controversial at the time because the house stands out among the Baroque, Gothic and Art Nouveau buildings for which Prague is famous.</p></div></div>
                    <div className={`${box1Class2.join(' ')} ${blurclass1.join(' ')} ${blurclassv1.join(' ')} ${blurclassve1.join(' ')} ${blurclassver1.join(' ')} ${blurclassvers1.join(' ')} ${blurclassversi1.join(' ')} ${blurclassversio1.join(' ')} ${blurclassversion1.join(' ')} ${blurclassversionsS1.join(' ')} ${blurclassversionsSL1.join(' ')} ${blurclassversionsSLX1.join(' ')}`}><img src="images/lotus.jpg" onClick={this.toggle1box2.bind(this)} id="img9"/><div className={textclass1.join(' ')}><h1>Lotus Temple</h1><p>The Lotus Temple, located in Delhi, India, is a Baháʼí House of Worship that was dedicated in December 1986.Notable for its flowerlike shape, it has become a prominent attraction in the city.The building is composed of 27 free-standing marble-clad "petals" arranged in clusters of three to form nine sides, with nine doors opening onto a central hall with a height of slightly over 34 meters and a capacity of 2,500 people. </p></div></div>
                    <div className={`${boxClass2.join(' ')} ${blurclass.join(' ')} ${blurclassv.join(' ')} ${blurclassve.join(' ')} ${blurclassver.join(' ')} ${blurclassvers.join(' ')} ${blurclassversi.join(' ')} ${blurclassversio.join(' ')} ${blurclassversion.join(' ')} ${blurclassversions.join(' ')} ${blurclassversionsSL.join(' ')} ${blurclassversionsSLX.join(' ')}`}><img src="images/dubai.jpg" onClick={this.toggle2.bind(this)} id="img10"/><div className={textclass.join(' ')}><h1>Burj Al Arab</h1><p>The Burj Al Arab is a luxury hotel located in the city of Dubai, United Arab Emirates. Managed by Jumeirah hotel group, it is one of the tallest hotels in the world, although 39% of its total height is made up of non-occupiable space. Burj Al Arab stands on an artificial island 280 m (920 ft) from Jumeirah Beach and is connected to the mainland by a private curving bridge. The shape of the structure is designed to resemble the sail of a ship. It has a helipad near the roof at a height of 210 m (689 ft) above ground. </p></div></div>
                    <div className={`${boxClass3.join(' ')} ${blurclass.join(' ')} ${blurclassv.join(' ')} ${blurclassve.join(' ')} ${blurclassver.join(' ')} ${blurclassvers.join(' ')} ${blurclassversi.join(' ')} ${blurclassversio.join(' ')} ${blurclassversion.join(' ')} ${blurclassversions.join(' ')} ${blurclassversionsS.join(' ')} ${blurclassversionsSLX.join(' ')}`}><img src="images/avustralya.jpg" onClick={this.toggle3.bind(this)} id="img11"/><div className={textclass.join(' ')}><h1>Sydney Opera House</h1><p>The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour located in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings.Designed by Danish architect Jørn Utzon, but completed by an Australian architectural team headed up by Peter Hall, the building was formally opened on 20 October 1973[4] after a gestation beginning with Utzon's 1957 selection as winner of an international design competition.</p></div></div>
                    <div className={`${box1Class3.join(' ')} ${blurclass1.join(' ')} ${blurclassv1.join(' ')} ${blurclassve1.join(' ')} ${blurclassver1.join(' ')} ${blurclassvers1.join(' ')} ${blurclassversi1.join(' ')} ${blurclassversio1.join(' ')} ${blurclassversion1.join(' ')} ${blurclassversions1.join(' ')} ${blurclassversionsS1.join(' ')} ${blurclassversionsSL1.join(' ')}`}><img src="images/Seashell.jpg" onClick={this.toggle1box3.bind(this)} id="img12"/><div className={textclass1.join(' ')}><h1>Conch Shell House</h1><p>VISITORS SHELLING ON ISLA MUJERES was designed by one of Mexico’s most famous artists, Octavio Ocampo, and his brother Eduardo Ocampo, an architect who dreamed of building a house in the shape of a seashell. Construction started in 2001, and took three years to complete. The house is a perfect display of Ocampo’s surrealistic touch meeting summer-home functionality, and adds a unique underwater aesthetic to the neighborhood. </p></div></div>
               </div>
           </div>
        </div>
            </div>
        )
    }
}


