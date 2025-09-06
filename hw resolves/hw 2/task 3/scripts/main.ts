type Author = { name: string, age: number };
type Book = { title: string,
              pageCount: number,
              genre: string,
              authors: Author[]
};

let book1: Book =
    {title: 'A',
     pageCount: 123,
     genre: 'AA',
     authors: [
         {
           name: 'asdsd',
           age: 22
         },
         {
             name: 'wwww',
             age: 23
         }
     ]
    }
let book2 : Book =
    {title: 'B',
        pageCount: 333,
        genre: 'BB',
        authors: [
            {
                name: 'qwe',
                age: 33
            },
            {
                name: 'ret',
                age: 32
            }
        ]
    }
let book3 : Book =
    {title: 'C',
        pageCount: 542,
        genre: 'CC',
        authors: [
            {
                name: 'tyu',
                age: 66
            },
            {
                name: 'dgdg',
                age: 52
            }
        ]
    }
    console.log(book1)
    console.log(book2)
    console.log(book3)




