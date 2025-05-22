// dummy routes from Next.js documentation --- read up on use of api folder within app and defining routes
// https://nextjs.org/blog/building-apis-with-nextjs#1-getting-started 

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
    // For example, fetch data from your DB here
    const users = [
        { id: 1, name: 'Vasean' },
        { id: 2, name: 'Jun' }
    ];
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: Request) {
    // Parse the request body
    const body = await request.json();
    const { name } = body;

    // e.g. Insert new user into your DB
    const newUser = { id: Date.now(), name };

    return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });
}