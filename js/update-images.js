// Update the character images in the characters.js file with official images from the Solo Leveling Wiki
document.addEventListener('DOMContentLoaded', function() {
    // Update character images with official ones from the Solo Leveling Wiki
    characters.forEach(character => {
        // Replace Beru's image with the new one
        if (character.name === "Beru") {
            character.image = "images/beru_new.jpg";
        }
        
        // Update with official images from the Solo Leveling Wiki
        if (character.name === "Sung Jinwoo") {
            character.image = "images/sung_jinwoo_official.jpeg";
        }
        if (character.name === "Cha Hae-In") {
            character.image = "images/cha_hae_in_official.png";
        }
        if (character.name === "Thomas Andre") {
            character.image = "images/thomas_andre_official.jpeg";
        }
        if (character.name === "Liu Zhigang") {
            character.image = "images/liu_zhigang_official.jpeg";
        }
        if (character.name === "Sung Il-Hwan") {
            character.image = "images/sung_il_hwan_official.jpeg";
        }
        if (character.name === "Sung Suho") {
            character.image = "images/sung_suho_official.jpeg";
        }
        
        // Keep previously added images
        if (character.name === "Bellion" && !character.image.includes("bellion")) {
            character.image = "images/bellion.jpg";
        }
        if (character.name === "Tusk" && !character.image.includes("tusk")) {
            character.image = "images/tusk.jpeg";
        }
    });
});
