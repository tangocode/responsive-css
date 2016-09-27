import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Responsive</h1>
          <h2 className="four-hidden">Columns System</h2>
          <h3>Pure Columns</h3>
          <div>
            <div className="col-1" style={{backgroundColor: "gray"}}>col #1</div>
            <div className="col-1" style={{backgroundColor: "gray"}}>col #2</div>
            <div className="col-1" style={{backgroundColor: "gray"}}>col #3</div>
            <div className="col-1" style={{backgroundColor: "gray"}}>col #4</div>
            <div className="col-1" style={{backgroundColor: "gray"}}>col #5</div>
            <div className="col-1" style={{backgroundColor: "gray"}}>col #6</div>
            <div className="col-1" style={{backgroundColor: "gray"}}>col-7</div>
            <div className="col-1" style={{backgroundColor: "gray"}}>col #8</div>
            <div className="col-1" style={{backgroundColor: "gray"}}>col #9</div>
            <div className="col-1" style={{backgroundColor: "gray"}}>col #10</div>
            <div className="col-1" style={{backgroundColor: "gray"}}>col #11</div>
            <div className="col-1" style={{backgroundColor: "gray"}}>col #12</div>
          </div>
          <hr/>
          <div>
            <div className="col-4" style={{backgroundColor: "gray"}}>col-4</div>
            <div className="col-4" style={{backgroundColor: "gray"}}>col-4</div>
            <div className="col-4" style={{backgroundColor: "gray"}}>col-4</div>
          </div>
          <h3>Columns with columns breakpoints</h3>
          <div>
            <div className="col-4" style={{backgroundColor: "gray"}}>col-4</div>
            <div className="col-4" style={{backgroundColor: "gray"}}>col-4</div>
            <div className="col-8 twelve-col-4" style={{backgroundColor: "gray"}}>col-8 twelve-col-4</div>
          </div>           
          <h3>Columns with size breakpoints</h3>
          <div>
            <div className="col-4" style={{backgroundColor: "gray"}}>col-4</div>
            <div className="col-4" style={{backgroundColor: "gray"}}>col-4</div>
            <div className="col-8 md-col-4" style={{backgroundColor: "gray"}}>col-8 md-col-4</div>
          </div>         
        </div>

        <div>
          <h1>Flex</h1>
          <h2>Flex Direction</h2>
          <h3>flex-row</h3>
          <div className="flex-row">
            <div style={{backgroundColor: "gray"}}>item 1</div>
            <div style={{backgroundColor: "gray"}}>item 2</div>
            <div style={{backgroundColor: "gray"}}>item 3</div>
          </div>
          <h3>flex-column</h3>
          <div className="flex-column">
            <div style={{backgroundColor: "gray"}}>item 1</div>
            <div style={{backgroundColor: "gray"}}>item 2</div>
            <div style={{backgroundColor: "gray"}}>item 3</div>
          </div>   
          <h3>flex direction responsive (four-flex-column eight-flex-row)</h3>
          <div className="four-flex-column eight-flex-row">
            <div style={{backgroundColor: "gray"}}>item 1</div>
            <div style={{backgroundColor: "gray"}}>item 2</div>
            <div style={{backgroundColor: "gray"}}>item 3</div>
          </div> 

          <h2>Flex Wrap</h2>
          <h3>flex-row-nowrap</h3>
          <div className="flex-row-nowrap">
            <div style={{backgroundColor: "gray"}}>A item with long text Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div style={{backgroundColor: "gray"}}>A item with long text Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div style={{backgroundColor: "gray"}}>A item with long text Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>          
          <h3>flex-row-wrap</h3>
          <div className="flex-row-wrap">
            <div style={{backgroundColor: "gray"}}>A item with long text Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div style={{backgroundColor: "gray"}}>A item with long text Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div style={{backgroundColor: "gray"}}>A item with long text Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>          
          <h3>flex-row-wrap-reverse</h3>
          <div className="flex-row-nowrap">
            <div style={{backgroundColor: "gray"}}>1 A item with long text Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div style={{backgroundColor: "gray"}}>2 A item with long text Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div style={{backgroundColor: "gray"}}>3 A item with long text Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div> 
          <h3>flex-row-nowrap responseive (four-flex-row-wrap eight-flex-row-nowrap twelve-flex-row-nowrap)</h3>
          <div className="four-flex-row-wrap eight-flex-row-nowrap twelve-flex-row-nowrap">
            <div style={{backgroundColor: "gray"}}>A item with long text Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div style={{backgroundColor: "gray"}}>A item with long text Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div style={{backgroundColor: "gray"}}>A item with long text Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div> 

          <h2>Flex Justify-Content Align-Items</h2>
          <h3>flex-start-start</h3>
          <div className="flex-start-start" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 50}}>
            <div style={{backgroundColor: "gray"}}>Item 1</div>
            <div style={{backgroundColor: "gray"}}>Item 2</div>
            <div style={{backgroundColor: "gray"}}>Item 3</div>
          </div>          
          <h3>flex-center-center</h3>
          <div className="flex-center-center" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 50}}>
            <div style={{backgroundColor: "gray"}}>Item 1</div>
            <div style={{backgroundColor: "gray"}}>Item 2</div>
            <div style={{backgroundColor: "gray"}}>Item 3</div>
          </div>          
          <h3>flex-end-end</h3>
          <div className="flex-end-end" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 50}}>
            <div style={{backgroundColor: "gray"}}>Item 1</div>
            <div style={{backgroundColor: "gray"}}>Item 2</div>
            <div style={{backgroundColor: "gray"}}>Item 3</div>
          </div> 
          <h3>flex-between-center</h3>
          <div className="flex-between-center" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 50}}>
            <div style={{backgroundColor: "gray"}}>Item 1</div>
            <div style={{backgroundColor: "gray"}}>Item 2</div>
            <div style={{backgroundColor: "gray"}}>Item 3</div>
          </div> 
          <h3>flex-around-center</h3>
          <div className="flex-around-center" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 50}}>
            <div style={{backgroundColor: "gray"}}>Item 1</div>
            <div style={{backgroundColor: "gray"}}>Item 2</div>
            <div style={{backgroundColor: "gray"}}>Item 3</div>
          </div>   
          <h3>flex-center-stretch</h3>
          <div className="flex-center-stretch" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 50}}>
            <div style={{backgroundColor: "gray"}}>Item 1</div>
            <div style={{backgroundColor: "gray"}}>Item 2</div>
            <div style={{backgroundColor: "gray"}}>Item 3</div>
          </div>
          <h3>flex-center-baseline</h3>
          <div className="flex-center-baseline" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 50}}>
            <div style={{backgroundColor: "gray"}}>Item 1</div>
            <div style={{backgroundColor: "gray"}}>Item 2</div>
            <div style={{backgroundColor: "gray"}}>Item 3</div>
          </div>          
          <h3>Flex Justify-Content Align-Items responsive (four-flex-start-start eight-flex-center-center twelve-flex-end-end)</h3>
          <div className="four-flex-start-start eight-flex-center-center twelve-flex-end-end" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 50}}>
            <div style={{backgroundColor: "gray"}}>Item 1</div>
            <div style={{backgroundColor: "gray"}}>Item 2</div>
            <div style={{backgroundColor: "gray"}}>Item 3</div>
          </div>  

          <h2>Flex Content</h2>
          <h3>flex-content-start</h3>
          <div className="flex-row-wrap flex-content-start" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 200}}>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>          </div>  
          <h3>flex-content-end</h3>
          <div className="flex-row-wrap flex-content-end" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 200}}>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
          </div>                                      
          <h3>flex-content-center</h3>
          <div className="flex-row-wrap flex-content-center" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 200}}>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
          </div>                                      
          <h3>flex-content-between</h3>
          <div className="flex-row-wrap flex-content-between" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 200}}>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
          </div>                                      
          <h3>flex-content-around</h3>
          <div className="flex-row-wrap flex-content-around" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 200}}>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
          </div>
          <h3>Flex Content responsive (four-flex-content-start eight-flex-content-center twelve-flex-content-end)</h3>
          <div className="flex-row-wrap four-flex-content-start eight-flex-content-center twelve-flex-content-end" style={{backgroundColor: "whitesmoke", boderWidth: 2, borderStyle: "solid", boderColor: "gray", height: 200}}>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
            <div style={{backgroundColor: "gray"}}>A item with long text </div>
          </div> 
        </div>        
      </div>  
    );
  }
}
