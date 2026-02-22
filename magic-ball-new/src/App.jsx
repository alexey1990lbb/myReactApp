import { useState } from 'react'

function MagicBall() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);

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

    setIsLoading(true);
    setAnswer('');

    setTimeout(() => {
    const index = Math.floor(Math.random() * answers.length);
    // setAnswer(answers[index]);
    const newAnswer = answers[index];

    setAnswer(newAnswer);

    const newHistory = [{ q: question, a: newAnswer }, ...history].slice(0, 5);
    setHistory(newHistory);

    setIsLoading(false);
    setQuestion('');
    }, 1500);
  };

  const clearAll = () => {
    setQuestion('');
    setAnswer('');
    setHistory([]);
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
        <h1 style={{ marginBottom: '30px', color: '#2c3e50' }}>Магический шар предсказаний</h1>

        <input
        type='text'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder='Введите ваш вопрос...'
        disabled={isLoading}
        style={{
          padding: '15px',
          fontSize: '16px',
          width: '300px',
          maxWidth: '90vw',
          border: '2px solid #3498db',
          borderRadius: '10px',
          marginBottom: '20px',
          textAlign: 'center',
          opacity: isLoading ? 0.7 : 1
        }}
        />
        <button
        onClick={getRandomAnswer}
        disabled={isLoading}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          marginBottom: '30px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          opacity: isLoading ? 0.7 : 1
        }}
        >
        {isLoading ? 'Шар раздумывает...' : 'Узнать ответ'}
        </button>
        {(answer || isLoading) && (
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
          animation: 'shake 0.5s ease-in-out',
          marginBottom: '20px'
          }}>
            {isLoading ? 'Шар пробуждается...' : answer}
            </div>
        )}
        {(answer || history.length > 0) && (
        <button 
          onClick={clearAll}
          style={{
            padding: '10px 20px', fontSize: '14px',
            backgroundColor: '#e74c3c', color: 'white',
            border: 'none', borderRadius: '20px', cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          Очистить всё
        </button>
      )}

      {history.length > 0 && (
        <div style={{
          maxWidth: '400px',
          maxHeight: '200px',
          overflowY: 'auto',
          backgroundColor: '#ecf0f1',
          borderRadius: '10px',
          padding: '15px',
          fontSize: '14px',
          color: '#7f8c8d'
        }}>
          <strong>Предыдущие вопросы:</strong>
          {history.map((item, index) => (
            <div key={index} style={{ 
              marginBottom: '10px',
              padding: '8px',
              backgroundColor: 'white',
              borderRadius: '5px'
              }}>
              <div style={{
                fontWeight: 'bold'
                }}>Q: {item.q}
                </div>
              <div>A: <em>{item.a}</em>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    );
}

export default MagicBall