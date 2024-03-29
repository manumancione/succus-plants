const productos = [{
        id: '001S',
        name: 'Crassula rupestris Rosario Vine',
        category: 'suculentas',
        stock: '20',
        price: '300',
        description: 'Una nativa de Sudáfrica, Crassula rupestris Rosary Vine es una suculenta pequeña, muy ramificada, con hojas triangulares apiladas que son de color verde pálido en el centro, con un verde ligeramente más oscuro a lo largo de los márgenes. Alcanzando hasta 30 centímetros de alto y 90 centímetros de ancho',
        image: '../../../public/suculenta001.webp'
    },
    {
        id: '002S',
        name: 'Crassula ovata undulata Ola Jade',
        category: 'suculentas',
        stock: '40',
        price: '450',
        description: 'Con hojas de color verde lima, márgenes rojos y una forma de crecimiento ondulada. Alcanza una altura madura de hasta 120 centímetros de alto y ancho, esta variedad es impresionante por sí sola, pero también es una excelente planta de "relleno" en arreglos suculentos, dada su estética única y su hábito de crecimiento tupido.',
        image: '../../../public/suculenta002.webp'
    },

    {
        id: '003S',
        name: 'Echeveria Atlántida',
        category: 'suculentas',
        stock: '20',
        price: '500',
        description: 'Proveniente de México, Echeveria Atlantis es una suculenta vibrante, en forma de roseta, repleta de hojas de color azul polvoriento con un margen rosado muy delgado, que presenta una ondulación única en el lapso de cada hoja. También conocida con el nombre de melocotones y crema, esta variedad obtiene su coloración y textura cremosas características de una capa gruesa de farina, que es una sustancia en polvo diseñada para proteger las hojas de los fuertes rayos del sol. ',
        image: '../../../public/suculenta003.webp'
    },
    {
        id: '004S',
        name: 'Echeveria Atolón Azul',
        category: 'suculentas',
        stock: '40',
        price: '450',
        description: 'Una fascinante suculenta en forma de roseta con hojas que varían en color desde el azul cielo hasta el verde lima, una capa de farina en polvo le da una apariencia casi surrealista. ¡Sin embargo, se debe tener cuidado para evitar estropear la farina con los aceites de sus huellas dactilares! Con un hábito de crecimiento casi similar al de un loto, esta variedad puede alcanzar hasta 25centímetros de ancho, lo que la convierte en una excelente pieza central para cualquier maceta suculenta, arreglo o jardín de rocas.',
        image: '../../../public/suculenta004.webp'
    },
    {
        id: '005S',
        name: 'Echeveria Blue Heron variegata',
        category: 'suculentas',
        stock: '50',
        price: '700',
        description: 'Excepcionalmente rara, Echeveria Blue Heron variegata presenta rosetas de hojas largas abigarradas en tonos de azul pálido, malva, rosa y crema. Una variedad verdaderamente única en su tipo, merece un lugar en cada colección suculenta, donde puede mantenerse como un solo espécimen o crear un sorprendente estallido de múltiples colores dentro de cualquier arreglo.',
        image: '../../../public/suculenta005.webp'
    },
    {
        id: '006S',
        name: 'Echeveria Cubic Frost™ PPAF',
        category: 'suculentas',
        stock: '20',
        price: '650',
        description: 'Tan increíblemente única que actualmente tiene una patente pendiente, Echeveria Cubic Frost™ forma rosetas concéntricas de hojas onduladas en forma de maza con un tono lila escarchado. La forma distintiva de la hoja rara vez se ve entre otras suculentas, lo que hace que Cubic Frost sea una adición excepcional a cualquier colección. Con un alcance de hasta 25 centímetros de ancho, esta variedad tendrá un impacto real.',
        image: '../../../public/suculenta006.webp'
    },
    {
        id: '007S',
        name: 'Echeveria Príncipe Azul',
        category: 'suculentas',
        stock: '10',
        price: '450',
        description: 'Echeveria Blue Prince presenta hojas oscuras de color gris azulado que forman la forma de roseta perfecta. Esta suculenta es tan hermosa en persona, y solo mejora cuando se expone a la luz brillante: ¡una cantidad adecuada de "estrés solar" puede incluso alentar a las rosetas de Blue Prince a sonrojarse! Cada roseta puede crecer hasta 15 centímetros de ancho.',
        image: '../../../public/suculenta007.webp'
    },
    {
        id: '008S',
        name: 'Echeveria Cisne Azul',
        category: 'suculentas',
        stock: '25',
        price: '300',
        description: 'Las hojas de color azul pastel de Echeveria Blue Swan forman rosetas apretadas que pueden alcanzar varios centímetros de diámetro. Las hojas, que son en gran parte aplanadas hacia el margen superior, se ahuecan ligeramente hacia el centro de cada roseta, lo que le da a esta suculenta una apariencia compacta. Una gruesa capa de farina es responsable de la apariencia suave y casi etérea de la planta, ¡aunque se debe tener cuidado de no estropear esta capa con los aceites de sus huellas dactilares!',
        image: '../../../public/suculenta008.webp'
    },
    {
        id: '009S',
        name: 'Echeveria Rompedores de neón',
        category: 'suculentas',
        stock: '70',
        price: '550',
        description: 'Echeveria Neon Breakers es un híbrido de Echeveria increíblemente único, con hojas en tonos de rojo, violeta y malva con márgenes ondulados de rosa neón. Con un tono vibrante en casi cualquier condición, solo mejora cuando se expone a los elementos, como luz solar más brillante y temperaturas frías (pero no heladas). Con una altura de hasta 8 centímetros y 20 centímetros de ancho.',
        image: '../../../public/suculenta009.webp'
    },
    {
        id: '010S',
        name: 'Echeveria Tippy',
        category: 'suculentas',
        stock: '100',
        price: '600',
        description: 'Creada por el renombrado hibridador de suculentas Dick Wright en 1968, Echeveria Tippy es una suculenta en forma de roseta con hojas de color verde azulado y puntas de color rosa brillante, ¡que es el origen del nombre de su cultivo! Aunque las puntas pueden parecer afiladas, son "puntas espinosas" que en realidad son suaves al tacto y completamente inofensivas. El aspecto pastel de estas plantas se ve realzado por una capa de farina aparentemente iridiscente, que es una capa de polvo que cubre las hojas de la planta. ',
        image: '../../../public/suculenta010.webp'
    },
    {
        id: '011S',
        name: 'Echeveria Gotas de lluvia',
        category: 'suculentas',
        stock: '20',
        price: '400',
        description: 'Creado por el famoso hibridador suculento Dick Wright, Echeveria Raindrops presenta rosetas de hojas de color verde azulado pálido con márgenes rosados ​​y una protuberancia globular en forma de gota en el centro de cada hoja, ¡lo que le da a la planta su nombre! Una capa de farina en polvo acentúa aún más esta estética ya única. Con un diámetro de hasta 15 centímetros, estas pequeñas plantas desarrollarán los bultos más pronunciados a medida que maduran.',
        image: '../../../public/suculenta011.webp'
    },
    {
        id: '012S',
        name: 'Echeveria setosa var. deminuta Planta de petardos',
        category: 'suculentas',
        stock: '100',
        price: '800',
        description: 'Conocida por su abundante producción de compensaciones, Echeveria setosa var. deminuta Firecracker Plant presenta rosetas densas y amontonadas de hojas azules especialmente regordetas. Recubierta de cerdas blancas que forman mechones en las puntas de cada hoja, esta variedad agrega una gran dosis de textura a cualquier disposición en macetas o jardín de rocas templado, donde rápidamente comenzará a cubrir el suelo en grupos de pequeñas rosetas de 5 centímetros.',
        image: '../../../public/suculenta012.webp'
    },
    {
        id: '001M',
        name: 'Maceta Chiara',
        category: 'macetas',
        stock: '20',
        price: '1300',
        description: 'La maceta Chiara es una maceta para suculentas única con un esmalte de mármol azul y blanco de alto brillo. Tiene el tamaño perfecto para cualquiera de nuestras plantas de variedad de 6.5cm a 9cm.',
        image: '../../../public/maceta001.webp'
    },
    {
        id: '002M',
        name: 'Maceta Antonella',
        category: 'macetas',
        stock: '20',
        price: '1350',
        description: 'La maceta Antonella es una maceta para suculenta llamativa con un vidriado negro mate y un tratamiento de vidriado semimetálico. Esta maceta tiene el tamaño perfecto para cualquiera de nuestras variedades de plantas de 10cm a 15cm.',
        image: '../../../public/maceta002.webp'
    },
    {
        id: '003M',
        name: 'Maceta Bianca',
        category: 'macetas',
        stock: '20',
        price: '1500',
        description: 'La maceta Bianca es una linda maceta suculenta con un vidriado de terracota y un patrón de triángulo azul y blanco. Esta maceta tiene el tamaño perfecto para cualquiera de nuestras plantas de variedad de 6cm a 10cm.',
        image: '../../../public/maceta003.webp'
    },
    {
        id: '004M',
        name: 'Maceta Carmina',
        category: 'macetas',
        stock: '20',
        price: '1100',
        description: 'El cuenco Carmina tiene estilo bohemio con un tratamiento tallado a mano. Esta maceta suculenta tiene el tamaño perfecto para cualquiera de nuestras variedades de plantas o paquetes de 6cm a 10cm.',
        image: '../../../public/maceta004.webp'
    },
    {
        id: '005M',
        name: 'Maceta Gianna',
        category: 'macetas',
        stock: '20',
        price: '1400',
        description: 'La maceta Gianna es una maceta moderna para suculentas con un acabado en un esmalte negro mate. Esta maceta tiene el tamaño perfecto para cualquiera de nuestras plantas de variedad de 6cm a 9cm.',
        image: '../../../public/maceta005.webp'
    },
    {
        id: '006M',
        name: 'Maceta Alessia',
        category: 'macetas',
        stock: '20',
        price: '1800',
        description: 'La maceta Alessia es una maceta para suculentas con patas de forma orgánica con un esmalte inspirado en el estampado animal. Esta maceta tiene el tamaño perfecto para cualquiera de nuestras plantas de variedad de 6cm a 9cm.',
        image: '../../../public/maceta006.webp'
    },
    {
        id: '007M',
        name: 'Maceta Sabina',
        category: 'macetas',
        stock: '20',
        price: '1300',
        description: 'La maceta Sabina es una impresionante maceta para suculentas hecha de terrazo agregado multicolor. Esta suculenta maceta tiene el tamaño perfecto para cualquiera de nuestras plantas de variedad de 6cm a 10cm.',
        image: '../../../public/maceta007.webp'
    },
    {
        id: '008M',
        name: 'Maceta Fiorella',
        category: 'macetas',
        stock: '20',
        price: '1450',
        description: 'La maceta Fiorella es una linda maceta en forma de huevo con un tratamiento de esmalte en capas sobre terracota. Esta maceta tiene el tamaño perfecto para cualquiera de nuestras plantas de variedad 6cm a 9cm.',
        image: '../../../public/maceta008.webp'
    },
    {
        id: '009M',
        name: 'Maceta Lia',
        category: 'macetas',
        stock: '20',
        price: '1600',
        description: 'La maceta Lia es una maceta para suculentas adorable hecha de gres blanco con esmalte de durazno y detalles dorados. Esta suculenta maceta tiene el tamaño perfecto para cualquiera de nuestras plantas de variedad de 6cm a 9cm.',
        image: '../../../public/maceta009.webp'
    },
     {
        id: '001P',
        name: 'Aglaonema Silver Bay',
        category: 'plantas',
        stock: '20',
        price: '3350',
        description: 'Nombre común: Árbol de hoja perenne chino. Este Evergreen Silver Bay chino viene con grandes hojas verdes con un toque verde más claro en el medio de las hojas. Es una planta fácil de cultivar y cuidar. Originaria de Asia, tolera casi cualquier condición de interior.  ',
         image: '../../../public/planta001.webp',
        
    },
    {
        id: '002P',
        name: 'Calathea Estrella de la belleza',
        category: 'plantas',
        stock: '20',
        price: '2350',
        description: 'Nombres comunes: planta de pavo real, planta de cebra. Descripción: Hay varias docenas de especies en este género. Originaria de las Américas tropicales, muchas de las especies son populares como plantas de maceta debido a sus hojas decorativas y, en algunas especies, a sus coloridas inflorescencias. Son comúnmente llamadas calatheas o (como sus parientes) plantas de oración.',
        image: '../../../public/planta002.webp',
       
    },
    {
        id: '003P',
        name: 'Calathea Ornata',
        category: 'plantas',
        stock: '20',
        price: '4350',
        description: 'Nombres comunes: planta de pavo real, planta de cebra. Descripción: Las plantas Calathea, nativas de las zonas tropicales de América del Sur y Central, África y las Indias Occidentales, se cultivan principalmente por sus hermosas hojas ovaladas, erguidas y de colores brillantes. Las diversas variedades de Calathea tienen hojas con la parte inferior morada y varios patrones de colores vibrantes en la parte superior.',
        image: '../../../public/planta003.webp',
       
    },
    {
        id: '004P',
        name: 'Stromanthe Magenta Triostar',
        category: 'plantas',
        stock: '20',
        price: '3350',
        description: 'Nombres comunes: Triostar, Magenta Triostar. Descripción: Stromanthe es una planta de interior sorprendentemente hermosa que nunca deja de llamar la atención. Tiene un aspecto exótico con sus hojas de color verde oscuro deliciosamente abigarradas con vetas de color rosa y crema. El reverso de las hojas tiene un hermoso tono rosado-púrpura.',
        image: '../../../public/planta004.webp',
        
    },
    {
        id: '005P',
        name: 'Calathea lancifolia Serpiente de cascabel',
        category: 'plantas',
        stock: '20',
        price: '4350',
        description: 'Nombres comunes: planta de pavo real, planta de cebra. Descripción: Esta Calathea Lancifolia, también comúnmente llamada serpiente de cascabel, viene con hojas de color verde oscuro que tienen ondas únicas. Como todas las plantas de Calathea, las hojas se ajustan a medida que el sol gira durante el día. Las plantas Calathea, nativas de las zonas tropicales de América del Sur y Central, África y las Indias Occidentales, se cultivan principalmente por sus hermosas hojas ovaladas, verticales y de colores brillantes.',
        image: '../../../public/planta005.webp',
    
    },
    {
        id: '006P',
        name: 'Chlorophytum comosum Bonnie',
        category: 'plantas',
        stock: '20',
        price: '4250',
        description: 'Nombres comunes: planta araña, planta avión, hiedra araña. Descripción: La planta de la araña es una planta vivaz nativa tropical de Sudáfrica. Las hojas de la planta de la araña son hilos delgados como cintas que terminan en punta y crecen hacia arriba y se doblan hacia abajo dándole el aspecto de una araña. La planta araña produce pequeñas flores blancas que crecen a lo largo de un largo tallo independiente de las hojas de la planta araña.',
        image: '../../../public/planta006.webp',
      
    }

]

export const funcionFetch = (id) => {
    return new Promise((res, ref) => {
        setTimeout(() => {
            res(id ? productos.find(prod=> prod.id===id) : productos )
        }, 2000)
        // si rechazado( '404' )
    })
}