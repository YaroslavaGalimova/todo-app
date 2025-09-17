function About() {
  return (
    <div>
      <h1>Об этом приложении</h1>
      <p>Это простое Todo-приложение, созданное с помощью:</p>
      <ul>
        <li>React + TypeScript - для фронтенда</li>
        <li>Spring Boot - для бэкенда</li>
        <li>MySQL - для базы данных</li>
      </ul>
      <p>Здесь вы можете создавать задачи и управлять ими!</p>
      <p>Что вам для этого нужно? </p>
        <ul>
            <li>Добавить задачи с заголовком и описанием на главной странице этого приложения</li>
            <li>Отметить задачи как выполненные, если работа над ними уже сделана</li>
            <li>Удалить задачи, которые больше не нужны</li>
        </ul>
        <p> Я очень надеюсь, что проект будет развиваться и я смогу добавить больше функций и опций! Если вы хотите меня поддержать или просто поближе познакомиться, вы можете обратить внимание на:</p>
        <ul>
            <li>Мой GitHub: <a href="https://github.com/YaroslavaGalimova" target="_blank" rel="noopener noreferrer">github.com/YaroslavaGalimova</a></li>
            <li>Мой телеграм: <a href="https://t.me/yaroslavagalimova" target="_blank" rel="noopener noreferrer">t.me/YaroslavaGalimova</a></li>
            <li>Моё резюме: <a href="/public/cv.pdf" target="_blank" rel="noopener noreferrer">Скачать резюме (PDF)</a></li>
        </ul>
        <p>Спасибо за внимание! :)</p>
    </div>
  );
}

export default About;