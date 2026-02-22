import { useState } from 'react'

function MagicBall() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const answers = [
    'Да',
    'Нет',
    'Может быть',
    'Безусловно',
    'Скорее нет, чем да',
    'Скорее да, чем нет',
    'Возможно',
    'Вероятно',
    'Маловероятно',
    'Спроси у кого-нибудь другого...',
    'Категорически нет',
    'Подумай сам...',
  ];

  const getRandomAnswer = () => {
    if (!question.trim()) {
      alert('Задайте вопрос!');
      return
    }
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  };

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        boxSizing: 'border-box',
      }}>
        <h1 style={{ marginBottom: '30px' }}>Магический шар предсказаний</h1>
        <input
        type='text'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder='Введите ваш вопрос...'
        style={{
          padding: '15px',
          fontSize: '16px',
          width: '300px',
          maxWidth: '90vw',
          border: '2px solid #3498db',
          borderRadius: '10px',
          marginBottom: '20px',
          textAlign: 'center',
        }}
        />
        <button
        onClick={getRandomAnswer}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          marginBottom: '30px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}
        >
          Узнать ответ
        </button>
        {answer && (
          <div style={{
            padding: '30px',
          fontSize: '20px',
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: '#3498db',
          borderRadius: '50%',
          width: '200px',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
          animation: 'shake 0.5s ease-in-out'
          }}>
            {answer}
            </div>
        )}
      </div>
    );
}

export default MagicBall