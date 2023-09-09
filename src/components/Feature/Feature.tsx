import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureStyles";

const Feature: React.FC = () => {
    return (
        <FeatureContainer>
            <video autoPlay loop muted>
                <source src="https://firebasestorage.googleapis.com/v0/b/vitecomm-3c711.appspot.com/o/AdobeStock_274919645.mp4?alt=media&token=05e75eab-bf25-4194-a374-90855278f7b3" type="video/mp4" />
            </video>
            <FeatureButton>Shop Now</FeatureButton>
        </FeatureContainer>
    );
};

export default Feature;
