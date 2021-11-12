type CityType = {
    title: string
    countruTitle: string

}

type AdressType = {
    streetTitle: string
    city: CityType
}

type TechType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    technologies: Array<TechType>
}


const student: StudentType = {
    id: 1,
    name: 'Roman',
    age: 38,
    isActive: true,
    adress: {
        streetTitle: 'Prospect 59',
        city: {
            title: 'Gomel',
            countruTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "REACT"
        }
    ]
}

console.log(student.adress.city.title);
console.log(student.technologies[2].title);