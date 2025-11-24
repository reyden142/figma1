import React from 'react';
import './Frame8445891.css';
import HomeItem from './HomeItem';
import LineSeparator from './LineSeparator';
import Button from './Button';

const Frame8445891 = () => {
    return (
        <div className="frame-8445891">
            <div className="frame-content">
                <HomeItem text="All pages" checkboxVariant="variant1" />
                <LineSeparator />
                <HomeItem text="Page 1" checkboxVariant="variant1" />
                <HomeItem text="Page 2" checkboxVariant="variant1" />
                <HomeItem text="Page 3" checkboxVariant="variant1" />
                <HomeItem text="Page 4" checkboxVariant="variant1" />
                <LineSeparator />
                <div className="frame-button-wrapper">
                    <Button className="button-box1" />
                </div>
            </div>
        </div>
    );
};

export default Frame8445891;
