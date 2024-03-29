import fs from 'fs';
import path from 'path';

const handler = (req, res) => {

    if(req.method === 'POST') {
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newFeedback = {
            id: new Date().toISOString(),
            email: email,
            text: feedbackText,
        }


        //store in database usually but a file for this example
    
        const filePath = path.join(process.cwd(), 'data', 'feedback.json');
        const fileData = fs.readFileSync(filePath);
        
        const data = JSON.parse(fileData);
        data.push(newFeedback);
        
        fs.writeFileSync(filePath, JSON.stringify(data));
    
        res.status(201).json({message: 'Feedback Saved Correctly', feedback: newFeedback})

    } else {
        const filePath = path.join(process.cwd(), 'data', 'feedback.json');
        const fileData = fs.readFileSync(filePath);
        
        const data = JSON.parse(fileData);
        res.status(200).json({message: 'Was not a post', feedback: data});
    }
}

export default handler;