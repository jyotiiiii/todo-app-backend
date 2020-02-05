# Endpoints

<table>
<thead>
<tr>
<th>Function</th>
<th>Method</th>
<th>Path</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>tasks</code></td>
<td><code>GET</code></td>
<td><code>/tasks</code></td>
<td>List all tasks</td>
</tr>
<tr>
<td><code>find</code></td>
<td><code>GET</code></td>
<td><code>/tasks/{id}</code></td>
<td>Get the task with id <code>{id}</code></td>
</tr>
<tr>
<td><code>edit</code></td>
<td><code>PUT</code></td>
<td><code>/tasks/{id}</code></td>
<td>Take task data and create or update task</td>
</tr>
<tr>
<td><code>create</code></td>
<td><code>POST</code></td>
<td><code>/tasks</code></td>
<td>Take task data and create a new task</td>
</tr>
<tr>
<td><code>remove</code></td>
<td><code>DELETE</code></td>
<td><code>/tasks/{id}</code></td>
<td>Delete the task with the id <code>{id}</code></td>
</tr>
</tbody>
</table>
