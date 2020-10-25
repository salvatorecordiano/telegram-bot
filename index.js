/**
* Telegram Bot
* @returns {object.http} The response
*/
module.exports = async (context) => {
  console.log(`Request ${context.http.body}`);
  try {
    const request = JSON.parse(context.http.body);
    const body = {
      'chat_id': request.message.chat.id,
      'text': request.message.text,
      'method': 'sendMessage'
    };    
    return buildResponse(200, body);
  } catch (e) {
    console.log(`Wrong request ${e.name}: ${e.message}`);
    return buildResponse(400, {'error': 'Bad request'});
  }
};

const buildResponse = (statusCode, body) => {
  return {
    headers: {'Content-Type': 'application/json'},
    statusCode: statusCode,
    body: JSON.stringify(body)
  };
};
