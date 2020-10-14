/**
* Telegram Bot
* @returns {object.http} The response
*/
module.exports = async (context) => {
  
  const request = JSON.parse(context.http.body);
  console.log('Request ', context.http.body);
  
  let body = {};
  body.chat_id = request.message.chat.id;
  body.text = request.message.text;
  body.method = 'sendMessage';
  
  let response = {
    headers: {'Content-Type': 'application/json'},
    statusCode: 200,
    body: JSON.stringify(body)
  };
  
  return response;
};
