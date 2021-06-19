export const setFooterHeaderColor = (color) => {
    const footer = document.querySelector('#footer');
    const header = document.querySelector('#header');
    footer.style.backgroundColor = color;
    header.style.backgroundColor = color;
}