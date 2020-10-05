const slider = document.querySelector('.home-slider');

const indicatorParents = document.querySelector('.home-controls ul');
var sectionIndex = 0;

function setIndex(){
    document.querySelector('.home-controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)'};


document.querySelectorAll('.home-controls li').forEach(function(indicator, ind){
    indicator.addEventListener('click', function(){
        sectionIndex = ind; 
        stopInterval();
        setIndex();
        indicator.classList.add('selected');
    });
});

var interval = setInterval(function(){
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1: 2;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
    if (sectionIndex == 2){
        sectionIndex = -1;
    }
}, 3700);

function stopInterval(){
    clearInterval(interval);
};
