const api = 'http://10.0.2.2:3001/';

export const getTasks = async () => {
    const tasks = await fetch( api + 'tasks' );
    return await tasks.json();
}