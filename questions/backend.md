# NodeJS

## Modules

Modules are a fundamental concept that allows you to organize your code into reusable and maintainable pieces. Modules help you encapsulate functionality, making it easier to manage and scale your codebase. Here's a brief overview of Node.js modules

### Creating Modules

#### File-Based Modules

In Node.js, each file is treated as a module. You can create a module by writing code in a separate file and then exporting the parts you want to make accessible to other modules.

```javascript
// exampleModule.js
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

module.exports = { add, multiply };
```

#### Exporting Variables and Functions

You can use module.exports or exports to expose variables, functions, or objects from a module.

```javascript
// exampleModule.js
exports.myFunction = () => {
  // code here
};

// Another way
module.exports = {
  myFunction: () => {
    // code here
  },
};
```

### Using Modules

#### Requiring Modules

In another file, you can use the require function to import the functionality from a module.

```javascript
// app.js
const exampleModule = require("./exampleModule");

console.log(exampleModule.add(2, 3)); // Outputs: 5
```

### Core Modules

#### Node.js Core Modules

Node.js provides a set of core modules that you can use without installing any additional packages. Examples include fs (file system), http (HTTP server), path (file path utilities), and more.

```javascript
const fs = require("fs");
const data = fs.readFileSync("file.txt", "utf-8");
```

### npm Modules

#### Third-Party Modules

You can also use third-party modules by installing them using npm (Node Package Manager). These modules can be easily added to your project and provide a wide range of functionalities.

```bash
npm install packageName
```

```javascript
const packageName = require("packageName");
```

### Module Patterns

#### CommonJS

Node.js follows the CommonJS module system, where each file is a module, and modules are loaded synchronously.

```javascript
// Importing module
const exampleModule = require("./exampleModule");
```

#### ES6 Modules (import/export):

With recent versions of Node.js, you can also use the ES6 module syntax, which allows you to use import and export statements.

```javascript
// Importing module
import { add, multiply } from "./exampleModule";
```

## Semantic Versioning

Semantic Versioning, often abbreviated as SemVer, is a versioning scheme for software that aims to convey meaning about the underlying changes and updates in a version number. This system is widely used in the software development community to manage dependencies and communicate changes between different versions of a project. In Node.js, Semantic Versioning is commonly used for managing package versions in the package.json file.

Semantic Versioning follows a three-part version number format: MAJOR.MINOR.PATCH. Each of these components has a specific meaning:

- MAJOR version: Increments when incompatible API changes are introduced. This means that existing code that relies on the package may break.

- MINOR version: Increments when new features are added in a backward-compatible manner. Existing functionality is not affected.

- PATCH version: Increments for backward-compatible bug fixes. This means that existing functionality is maintained, but any issues or bugs are resolved.

- Apart from these three numeric components, a pre-release and build metadata can be added. For example, 1.2.3-beta+build456. In this version, "beta" is the pre-release tag, and "build456" is the build metadata.

## Error Handling

Error handling is a crucial aspect of writing robust and reliable Node.js applications. In Node.js, errors can occur at various stages, such as during file operations, network requests, or when dealing with asynchronous code. Proper error handling helps identify and handle these issues gracefully, preventing crashes and improving the overall stability of your application.

### Synchronous Code

When dealing with synchronous code, you can use try and catch blocks to handle errors:

```javascript
try {
  // Code that may throw an error
  const result = someSynchronousFunction();
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
}
```

### Asynchronous Code

For handling errors in asynchronous code, you can use a combination of callbacks, Promises, or async/await:

#### Callbacks

```javascript
someAsyncFunction((error, result) => {
  if (error) {
    console.error("An error occurred:", error.message);
  } else {
    console.log(result);
  }
});
```

#### Promises

```javascript
someAsyncFunction()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });
```

#### Async/Await

```javascript
async function fetchData() {
  try {
    const result = await someAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

fetchData();
```

### Event Emitters

Many Node.js modules and classes use event emitters to handle errors. You can listen for the 'error' event:

```javascript
const fs = require("fs");
const fileStream = fs.createReadStream("nonexistent-file.txt");

fileStream.on("error", (error) => {
  console.error("Error reading file:", error.message);
});
```

### Custom Errors

You can create custom error classes to distinguish between different types of errors and handle them accordingly:

```javascript
class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

try {
  throw new MyCustomError("This is a custom error.");
} catch (error) {
  if (error instanceof MyCustomError) {
    console.error("Custom error caught:", error.message);
  } else {
    console.error("Unexpected error:", error.message);
  }
}
```

### Global Error Handling

To handle uncaught exceptions globally, you can use the 'uncaughtException' event:

```javascript
process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error.message);
  process.exit(1);
});
```

However, it's generally better to let your application gracefully shut down on unhandled exceptions and use process managers or tools like pm2 to automatically restart the application.

## Promises

Asynchronous programming is crucial for handling tasks like file I/O, network requests, and other operations that might take time to complete. Asynchronous programming in Node.js is often achieved using two main concepts: callbacks and Promises. Here, I'll focus on Promises and the async/await syntax, which makes working with Promises more readable and concise.

- A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states:

- Pending: The initial state; the promise is neither fulfilled nor rejected.
- Fulfilled: The operation completed successfully, and the promise has a resulting value.
- Rejected: The operation failed, and the promise has a reason for the failure.

```javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    const success = true; // Simulating a successful operation
    if (success) {
      resolve("Operation completed successfully!");
    } else {
      reject("Operation failed!");
    }
  }, 1000); // Simulating a delay of 1 second
});

// Consuming the Promise using .then() and .catch()
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

### async/await

async and await are keywords introduced in ECMAScript 2017 (ES8) that make working with Promises more concise and easier to read.

- async: The async keyword is used to define a function as asynchronous. It always returns a Promise.

- await: The await keyword is used inside an async function to wait for the Promise to settle (fulfilled or rejected) and to obtain the result.

```javascript
// Asynchronous function using async/await
async function myAsyncFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Calling the async function
myAsyncFunction();
```

In this example, myAsyncFunction is an asynchronous function that awaits the result of myPromise. The try block is used to handle the fulfillment, and the catch block handles any potential rejection.

Using async/await can make your asynchronous code look more synchronous and easier to understand, especially when dealing with multiple asynchronous operations in sequence.

## Streams

Node.js streams are a powerful and efficient feature of the Node.js platform that allow you to work with data in a streaming fashion. Streams in Node.js are implemented using the EventEmitter class and are designed to handle large amounts of data efficiently by processing it in chunks, rather than loading the entire data into memory at once.

There are four types of streams in Node.js:

### Readable Streams

These streams represent a source of data from which you can read. Examples include reading data from a file, an HTTP request, or generating data programmatically.

```javascript
const fs = require("fs");
const readableStream = fs.createReadStream("example.txt");
readableStream.on("data", (chunk) => {
  console.log(chunk);
});
```

### Writable Streams

These streams represent a destination to which you can write data. Examples include writing data to a file or sending data in an HTTP response.

```javascript
const fs = require("fs");
const writableStream = fs.createWriteStream("output.txt");
writableStream.write("Hello, this is a stream!");
```

### Duplex Streams

These streams can be used for both reading and writing. An example is a TCP socket.

```javascript
const net = require("net");
const duplexStream = new net.Socket();
duplexStream.connect(3000, "localhost", () => {
  duplexStream.write("Hello, this is a duplex stream!");
});
```

### Transform Streams

These are a type of duplex stream where the output is computed based on the input. They are commonly used for data transformation, such as compression or encryption.

```javascript
const { Transform } = require("stream");
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

process.stdin.pipe(upperCaseTransform).pipe(process.stdout);
```

Streams can be used to process data in chunks, which is particularly useful when working with large datasets. This chunked processing allows for more efficient memory usage and faster response times.

Some important methods and events associated with streams include:

- pipe() method: Used to connect the output of one stream to the input of another.
- data event: Fired when data is available to be read from a readable stream.
- end event: Fired when there is no more data to be read from a readable stream.
- finish event: Fired when all data has been written to a writable stream.

Streams are an integral part of Node.js, and they provide a flexible and efficient way to handle data processing in various scenarios. They are commonly used in file I/O, network programming, and other asynchronous operations.

## Multithreading

Node.js is known for its single-threaded, event-driven architecture. However, it does support a form of "multithreading" through a module called worker_threads. The worker_threads module enables the creation of worker threads in Node.js, allowing you to perform parallel execution of tasks.

### Creating a Worker Thread

To use worker threads, you need to import the worker_threads module.

```javascript
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");
```

### Check if Main Thread or Worker Thread

The isMainThread variable helps you determine if the code is running in the main thread or in a worker thread.

```javascript
if (isMainThread) {
  // Code for the main thread
} else {
  // Code for the worker thread
}
```

### Create a Worker

In the main thread, you can create a new worker thread using the Worker class.

```javascript
const worker = new Worker("path/to/worker-script.js", { workerData: someData });
```

- path/to/worker-script.js: The path to the script that will run in the worker thread.
- { workerData: someData }: Optional data that you want to pass to the worker thread.

### Communication between Main and Worker Threads

You can communicate between the main thread and worker threads using the parentPort in the worker thread and the postMessage method in both the main and worker threads.

In the main thread:

```javascript
worker.on("message", (message) => {
  console.log("Received message from worker:", message);
});

worker.postMessage({ someData: "Hello from main thread!" });
```

In the worker thread:

```javascript
parentPort.on("message", (message) => {
  console.log("Received message from main thread:", message);
});

parentPort.postMessage({ someData: "Hello from worker thread!" });
```

### Handling Events and Errors:

You can listen for events and handle errors in both the main and worker threads.

```javascript
worker.on("error", (err) => {
  console.error("Error in worker thread:", err);
});

worker.on("exit", (code) => {
  console.log(`Worker thread exited with code ${code}`);
});
```

### Terminate Worker Threads:

You can terminate a worker thread using the terminate method.

```javascript
worker.terminate();
```

It's important to note that while worker threads allow parallel execution, they don't share memory. Communication between the main thread and worker threads is achieved through message passing.

- Main Thread (app.js):

```javascript
const { Worker, isMainThread } = require("worker_threads");

if (isMainThread) {
  const worker = new Worker("./worker.js", {
    workerData: "Hello from main thread!",
  });

  worker.on("message", (message) => {
    console.log("Received message from worker:", message);
  });

  worker.postMessage({ someData: "Hello from main thread!" });
} else {
  const { parentPort, workerData } = require("worker_threads");

  parentPort.on("message", (message) => {
    console.log("Received message from main thread:", message);
  });

  parentPort.postMessage({ someData: "Hello from worker thread!" });
}
```

- Worker Thread (worker.js):

```javascript
const { parentPort, workerData } = require("worker_threads");

parentPort.on("message", (message) => {
  console.log("Received message from main thread:", message);
});

parentPort.postMessage({ someData: "Hello from worker thread!" });
```

To run this example, you would execute node app.js in your terminal.

## GraphQL vs Rest

GraphQL and REST are both API (Application Programming Interface) technologies that enable communication between different software systems. Each has its own strengths and weaknesses, and the choice between them often depends on the specific requirements of a project. Let's explore the key differences, pros, and cons of GraphQL and REST.

### REST (Representational State Transfer)

#### Pros

- Simplicity and Familiarity:

RESTful APIs are simple to understand and use, making them widely adopted and understood.
REST relies on standard HTTP methods (GET, POST, PUT, DELETE), which are familiar to most developers.

- Statelessness:

REST is stateless, meaning each request from a client contains all the information needed to fulfill that request. This simplifies server-side logic.

- Caching:

REST supports caching at the server and client levels, improving performance by reducing the need for redundant data transfers.

- Scalability:

RESTful services can be easily scaled horizontally by adding more servers, as there is no shared state between them.

#### Cons

- Over-fetching and Under-fetching:

One common issue with REST is over-fetching or under-fetching of data. Clients may receive more data than needed (over-fetching) or not enough data, requiring additional requests (under-fetching).

- Versioning:

As requirements evolve, versioning becomes a challenge in REST APIs. Different versions of an API might be needed to support changes, leading to potential compatibility issues.

- Multiple Endpoints:

REST often requires multiple endpoints for different resources and actions, which can lead to a higher number of network requests.

### GraphQL

#### Pros

- Single Endpoint:

GraphQL APIs typically have a single endpoint, reducing the number of network requests and simplifying the client-server interaction.

- Efficient Data Retrieval:

Clients can specify the exact data they need, reducing over-fetching and under-fetching issues. This can lead to more efficient data retrieval.

- Strong Typing:

GraphQL uses a strong typing system, allowing for better validation of queries and responses during development.

- Real-time Updates:

GraphQL supports real-time updates using subscriptions, enabling clients to receive real-time data changes without polling.

#### Cons

- Learning Curve:

GraphQL may have a steeper learning curve, especially for those accustomed to REST. Understanding the query language and how to structure queries is essential.

- Security Concerns:

GraphQL allows clients to request specific fields, which could potentially be abused for data extraction. Proper security measures are crucial to prevent unauthorized access.

- File Uploads:

Handling file uploads in GraphQL can be more complex compared to REST.

- Caching Challenges:

Caching can be more challenging in GraphQL due to the dynamic nature of queries. Careful consideration is needed to implement effective caching strategies.

Choosing between GraphQL and REST depends on your project requirements, team expertise, and specific use cases. REST is often preferred for simpler projects and scenarios where a standardized approach is sufficient. GraphQL shines in scenarios where flexibility in data retrieval and real-time updates are critical.

## Microservices, Monoliths, SOA

### Monolith

A monolithic architecture is a traditional software architecture where all the components of a system are tightly integrated and interconnected. In a monolith, the entire application is usually built as a single, unified unit. This means that all the components, such as the user interface, business logic, and data access layer, are part of the same codebase and deployed together.

#### Advantages of Monoliths

- Simplicity: Monoliths are often simpler to develop and deploy, especially for small to medium-sized applications.
- Easier Debugging: Debugging and testing can be easier in a monolithic architecture because all the code is in one place.

#### Disadvantages of Monoliths

-Scalability: Scaling a monolithic application can be challenging, as you may need to scale the entire application even if only one component requires more resources.

- Maintenance: As the application grows, it can become more challenging to maintain and add new features.

### Microservices

Microservices architecture is an approach to building software where a system is divided into small, independent services, each of which is focused on a specific business capability. Each service is a separate application and can be developed, deployed, and scaled independently. Communication between microservices is typically done through APIs.

#### Advantages of Microservices

- Scalability: Microservices allow for individual components to be scaled independently, which can be more efficient in handling varying workloads.
- Flexibility: Different microservices can be developed using different technologies and can be updated independently.
- Resilience: If one microservice fails, it doesn't necessarily affect the entire system.

#### Disadvantages of Microservices

- Complexity: Managing a system with many independent services can be complex, and there's a need for a robust infrastructure for communication and coordination.
- Latency: Inter-service communication might introduce some latency compared to in-process calls in a monolithic application.

### Service-Oriented Architecture (SOA)

SOA is a broader architectural pattern that involves designing software using a collection of loosely coupled services. These services can be organized to provide specific business functionalities and can communicate with each other using standardized protocols.

#### Advantages of SOA

- Reusability: Services can be reused across different applications and projects.
- Interoperability: Services can be developed using different technologies, allowing for interoperability between systems.

#### Disadvantages of SOA

- Complexity: Designing and managing services in a SOA can be complex, especially as the number of services increases.
- Performance Overhead: The use of standardized protocols for communication can introduce some performance overhead.

In summary, monolithic architectures are simpler but might face challenges in scalability and maintenance. Microservices offer more flexibility and scalability but come with increased complexity. SOA is a broader approach that encompasses both monoliths and microservices, focusing on creating loosely coupled, interoperable services. The choice between these architectures depends on the specific needs and goals of the application or system being developed.

## Message Brokers

Kafka and RabbitMQ are both popular message broker systems used for building distributed systems and facilitating communication between different parts of an application. However, they have different architectures and are often used in different use cases.

### Apache Kafka

- Purpose: Kafka is a distributed streaming platform that is designed for high-throughput, fault-tolerant, and scalable data streaming.
- Architecture: Kafka is built around a distributed commit log, where messages (events) are stored in a distributed and fault-tolerant manner. It uses a publish-subscribe model where producers publish messages to topics, and consumers subscribe to those topics to receive the messages.
- Use Cases: Kafka is commonly used for building real-time data pipelines, event sourcing, log aggregation, and building applications that require high-throughput and fault tolerance.

### RabbitMQ

- Purpose: RabbitMQ is a message broker that implements the Advanced Message Queuing Protocol (AMQP). It is designed to facilitate communication between different components or services in a distributed system.
- Architecture: RabbitMQ uses a message queue model where producers send messages to exchanges, and exchanges route messages to queues based on defined rules. Consumers then retrieve messages from queues. It supports various messaging patterns, including point-to-point, publish-subscribe, and request-response.
- Use Cases: RabbitMQ is commonly used for building scalable and decoupled systems. It's suitable for scenarios where you need reliable message delivery, task distribution, or communication between different parts of a system.

### Differences

- Messaging Model: Kafka is more of a streaming platform that retains and processes event streams, while RabbitMQ is a traditional message broker with queuing semantics.
- Persistence: Kafka persists messages to disk, allowing it to store large amounts of data for longer periods. RabbitMQ also supports persistence but is often used for more immediate messaging needs.
- Use Cases: Kafka is often favored for scenarios requiring high-throughput event streaming and real-time analytics. RabbitMQ is commonly used for traditional enterprise messaging, task distribution, and building decoupled systems.

## Scalability Tools

Scalability is an important consideration in software development, especially as applications grow in size and user base. Scalability tools help developers build systems that can handle increased load and maintain performance as demand grows. Here are some key concepts and tools related to scalability:

### Load Balancers

- Definition: Load balancers distribute incoming network traffic across multiple servers to ensure no single server is overwhelmed.
- Purpose: Distributing the workload helps prevent a single point of failure and ensures that each server in the system is used efficiently.
- Popular Tools: Nginx, HAProxy, AWS Elastic Load Balancer.

### Caching

- Definition: Caching involves storing copies of frequently accessed data in a location that is faster to access than the original source.
- Purpose: Caching reduces the need to regenerate or fetch the same data repeatedly, improving response time and reducing server load.
- Popular Tools: Redis, Memcached, Varnish.

### Database Sharding

- Definition: Sharding involves breaking a large database into smaller, more manageable pieces called shards.
- Purpose: Sharding distributes the database load across multiple servers, preventing a single database from becoming a bottleneck.
- Popular Tools: MongoDB, Cassandra, MySQL Cluster.

### Content Delivery Network (CDN)

- Definition: CDNs are networks of distributed servers that work together to deliver web content to users based on their geographical location.
- Purpose: CDNs reduce latency by serving content from servers that are physically closer to the user, improving overall system performance.
- Popular Tools: Cloudflare, Akamai, Amazon CloudFront.

### Horizontal Scaling

- Definition: Horizontal scaling involves adding more machines or nodes to a system to distribute the load.
- Purpose: This approach allows systems to handle increased traffic by adding more resources rather than upgrading individual components.
- Popular Tools: Kubernetes, Docker Swarm, Apache Mesos.

### Asynchronous Processing:

- Definition: Asynchronous processing involves executing tasks independently of the main application flow.
- Purpose: Asynchronous processing allows the system to offload time-consuming tasks, preventing the main application from becoming unresponsive.
- Popular Tools: RabbitMQ, Apache Kafka, Celery.

### Auto-Scaling:

- Definition: Auto-scaling dynamically adjusts the number of resources allocated to an application based on demand.
- Purpose: This ensures that the system always has enough resources to handle the current workload, optimizing cost and performance.
- Popular Tools: AWS Auto Scaling, Google Cloud Autoscaler.

### Monitoring and Logging:

- Definition: Monitoring tools track the performance and health of the system, while logging tools record events and errors for analysis.
- Purpose: Monitoring and logging help identify bottlenecks, track system behavior, and troubleshoot issues to improve scalability.
- Popular Tools: Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana).
