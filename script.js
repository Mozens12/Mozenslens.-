// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
<script>
// Social media links (edit here anytime)
const facebookLink = "https://www.facebook.com/share/17mpSw2B9Z/";
const instagramLink = "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME";

// Apply links to icons automatically
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("facebook-icon").href = facebookLink;
    document.getElementById("instagram-icon").href = instagramLink;
});

// Optional: hover animation
function addHoverEffect(id) {
    const icon = document.getElementById(id);
    icon.addEventListener("mouseover", () => { icon.style.transform = "scale(1.15)"; });
    icon.addEventListener("mouseout", () => { icon.style.transform = "scale(1)"; });
}

addHoverEffect("facebook-icon");
addHoverEffect("instagram-icon");
</script>



