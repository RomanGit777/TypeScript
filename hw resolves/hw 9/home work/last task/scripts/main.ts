// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

type CoursesArrayType = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[]
};
let coursesArray:  CoursesArrayType[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {

    const courseContainer: HTMLDivElement = document.createElement('div');
    courseContainer.classList.add('course-container');

    const title: HTMLHeadingElement = document.createElement('h1');
    title.innerText = `Title: ${course.title}`;

    const monthDuration: HTMLHeadingElement = document.createElement('h2');
    monthDuration.innerText = `Month duration: ${course.monthDuration}`;

    const hoursDuration: HTMLHeadingElement  = document.createElement('h3');
    hoursDuration .innerText = `Hours duration: ${course.hourDuration}`;

    const moduleList: HTMLUListElement = document.createElement('ul');
    moduleList.innerText = 'Modules:';
    for (const module of course.modules) {
    const li: HTMLLIElement = document.createElement('li');
    li.innerText = module;
        moduleList.appendChild(li);
    }

    courseContainer.append(title, monthDuration, hoursDuration ,moduleList);
    document.body.appendChild(courseContainer);
}


