import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en GifGridItem', () => {

    const title = 'Un título';
    const url = 'https://localhost/img.jpg';
    
    let wrapper = shallow(<GifGridItem
        title={title}
        url = {url}
    />);
    beforeEach(() => {
        wrapper = shallow(<GifGridItem
            title={title}
            url = {url}
        />);
    })

    test('Should show the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should has a parragraph including title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    
    test('should get the img same as url and alt of props', () => {
        const img = wrapper.find('img');  // Si hay múltiples en nuestra vista, se puede utilziar id con #, o identificador de clase con . o si son varias con .at()
        //console.log(img.html()) //Si utilizamos img.html se mostrará en consola el String de la etiqueta incluyendo la info de propiedades
        console.log(img.props()) //En cambio si se utiliza .props() se obtendrá un objeto con las propiedades del componente. Si necesitamos hacer test con cada propiedad se puede
                                 //obtener de esta manera. 

        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);

    })

    test('should has the class animate__fadeIn', () => {
        const requiredClassName = 'animate__fadeIn';
        const div = wrapper.find('div');
        const className = div.props().className;
        expect(className == null).toBe(false); //Se valida primero que la propiedad exista, es decir, que el div tenga clases asignadas
        if(className != null){  //Posteriormente se valida, en caso de que si exista la propiedad, que esta contenga la clase obligatoria
            expect(className.includes(requiredClassName)).toBe(true);
        }
    })
    
    

})
