function setTimer(){
    const element1 =`
    <div>
     <h1>Javascript</h1>
     <input type="text"/>
     <p>${new Date().toLocaleTimeString()}</p>
    </div>
    `;
    document.getElementById('Afra').innerHTML= element1;

    const element2 =React.createElement(
        `div`,
        null,
        React.createElement('h1', null, 'React'),
        React.createElement('div',null,
        React.createElement('input',{type:'text'})
        ),
        React.createElement('p', null, new Date().toLocaleTimeString())
    );
    ReactDOM.render(element2,document.getElementById('Sadat'));
}
setInterval(setTimer, 1000);