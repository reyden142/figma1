import React from 'react';
import './App.css';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import HomeItem from './components/HomeItem';
import Frame8445891 from './components/Frame8445891';

function App() {
  return (
    <div className="App">
      <div className="buttons-container">
        <Button className="button-box1" />
        <Button className="button-box2" />
        <Button className="button-box3" />
      </div>
      <div className="checkboxes-container">
        <Checkbox variant="variant1" />
        <Checkbox variant="variant2" />
        <Checkbox variant="variant3" />
        <Checkbox variant="variant4" />
        <Checkbox variant="variant5" />
        <Checkbox variant="variant6" />
        <Checkbox variant="variant7" />
        <Checkbox variant="variant8" />
        <Checkbox variant="variant9" />
      </div>
      <div className="home-items-container">
        <HomeItem text="All pages" checkboxVariant="variant1" />
        <HomeItem text="All pages" checkboxVariant="variant2" />
        <HomeItem text="All pages" checkboxVariant="variant3" />
        <HomeItem text="All pages" checkboxVariant="variant4" />
        <HomeItem text="All pages" checkboxVariant="variant5" />
        <HomeItem text="All pages" checkboxVariant="variant6" />
        <HomeItem text="All pages" checkboxVariant="variant7" />
        <HomeItem text="All pages" checkboxVariant="variant8" />
        <HomeItem text="All pages" checkboxVariant="variant9" />
      </div>
      <Frame8445891 />
    </div>
  );
}

export default App;
