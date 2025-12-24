// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Movie poster data using Unsplash images
const movieCategories = {
    trending: [
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400',
        'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400',
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400',
        'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400',
        'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400',
        'https://images.unsplash.com/photo-1574267432644-f610cab4bd75?w=400',
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400',
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400'
    ],
    popular: [
        'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400',
        'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400',
        'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400',
        'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400',
        'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400',
        'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400',
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400',
        'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=400'
    ],
    toprated: [
        'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450',
        'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=300&h=450',
        'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=300&h=450',
        'https://images.unsplash.com/photo-1564569896291-f36c8bf8e0ea?w=300&h=450',
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&h=450',
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&h=450'
    ],
    action: [
        'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400',
        'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=400',
        'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?w=400',
        'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=400',
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400',
        'https://images.unsplash.com/photo-1560109947-543149eceb16?w=400',
        'https://images.unsplash.com/photo-1478061653917-455ba7f4a541?w=400',
        'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400'
    ],
    documentaries: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400',
        'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400',
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400',
        'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400',
        'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?w=400',
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400',
        'https://images.unsplash.com/photo-1523551102-c4b0d3c3f1b0?w=400'
    ]
};

// Load posters into rows
function loadPosters(containerId, images, isLarge = false) {
    const container = document.getElementById(containerId);
    images.forEach(imgUrl => {
        const poster = document.createElement('div');
        poster.className = isLarge ? 'poster poster-large' : 'poster';
        poster.style.backgroundImage = `url('${imgUrl}')`;
        container.appendChild(poster);
    });
}

// Initialize all rows
loadPosters('trending', movieCategories.trending);
loadPosters('popular', movieCategories.popular);
loadPosters('toprated', movieCategories.toprated, true);
loadPosters('action', movieCategories.action);
loadPosters('documentaries', movieCategories.documentaries);

// Add click handlers for posters
document.querySelectorAll('.poster').forEach(poster => {
    poster.addEventListener('click', () => {
        alert('Video player would open here!');
    });
});
