/**
* EmailService.ts
* @2024 Digital Aid Seattle
*/

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

class EmailService {

    isValid(email: string): boolean {
        return email.match(EMAIL_REGEX) != null
    }

    async subscribe(email: string): Promise<any> {
        return fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY, // Use a backend to keep this secure
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                listIds: [2],
            }),
        })
            .then((response) => response.json())

        return true;
    }
}

const emailService = new EmailService();
export { emailService };

