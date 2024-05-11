const colors = document.querySelectorAll('.colors div')

const colorStat = [
    {
        id: 'yellow',
        count: 0
    },

    {
        id: 'white',
        count: 0
    },

    {
        id: 'pink',
        count: 0
    },

    {
        id: 'blue',
        count: 0
    },

    {
        id: 'red',
        count: 0
    },

    {
        id: 'green',
        count: 0
    }
]

function updateStat() {
    for(let i=0; i<colors.length; i++) {
        colors[i].innerHTML = 
        `
        <div class="label">${colorStat[i].id.toLocaleUpperCase()}</div>
        <div class="count">${colorStat[i].count}</div>
        `
    }
}

colors.forEach(c => {
    c.addEventListener('click', (e)=> {
        
        colorStat.forEach(s => {
            if(s.id == e.target.id) {
                if(s.count>=7 || isNaN(s.count)) {
                    s.count = 'GO'
                }
                else
                    s.count += 1;
            }
        })

        updateStat()

    })
})

updateStat()