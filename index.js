const slider = document.querySelector('.home-slider');

const indicatorParents = document.querySelector('.home-controls ul');
var sectionIndex = 0;

function setIndex(){
    document.querySelector('.home-controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)'};

document.querySelectorAll('.home-controls li').forEach(function(indicator, ind){
    indicator.addEventListener('click', function(){
        sectionIndex = ind; 
        setIndex();
        indicator.classList.add('selected');
    });
});

setInterval(function(){
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1: 3;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
    if (sectionIndex == 3){
        sectionIndex = -1;
    }
}, 5000);


