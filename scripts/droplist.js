/*
MUST INCLUDE THIS HTML:

<dl>
    <dt class="reveal"><span class="link-icon material-symbols-outlined">
    chevron_right</span>
     How is it better for the environment?
     </dt>
        <dd>
        <p>Rounding stones creates some mud but will never add to pollution like plastic does. Not to mention, if you lose your stone or throw it away, instead of rotting in a landfil it'll decompose like any other piece of sand or rock on the planet.</p>
        </dd>

    <dt class="reveal"><span class="link-icon material-symbols-outlined">
    chevron_right</span>
     How is it better for the environment?
     </dt>
        <dd>
        <p>Rounding stones creates some mud but will never add to pollution like plastic does. Not to mention, if you lose your stone or throw it away, instead of rotting in a landfil it'll decompose like any other piece of sand or rock on the planet.</p>
        </dd>

    <dt class="reveal"><span class="link-icon material-symbols-outlined">
    chevron_right</span>
     How is it better for the environment?
     </dt>
        <dd>
        <p>Rounding stones creates some mud but will never add to pollution like plastic does. Not to mention, if you lose your stone or throw it away, instead of rotting in a landfil it'll decompose like any other piece of sand or rock on the planet.</p>
        </dd>
</dl>

MUST INCLUDE THIS LESS:

dt, dd {
        margin: 2px 0;
}
dt {
    cursor: pointer;
    display: inline-flex;
    padding: 1em 0 .5em 0;
    border-top: 1px solid @color2;
    font-size: 1.2em;
    &:hover {
        background-color: rgba(255, 255, 255, .4);
        border-radius: 5px;
    }
    &:first-child{
        border-top: none;
    }
    span{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        transition: 300ms ease all;
    }
}
dd {
    font-style: italic;
}
dt.open{
    transition: 300ms ease all;
    color: @color2;
    span{
        border: 1px solid @color2;
        color: @color2;
        transform: rotate(90deg);
        transition: 300ms ease all;

    }
}

*/

$(document).ready(function() {
    
    $("dd").hide();
    
    $("dt").on("click", function(){
        
        $(this).toggleClass("open").next().slideToggle();
        
    });
    
});