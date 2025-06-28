# 🧪 Angular Challenge: Services & Dependency Injection

## 📘 Objective
Build a simple Message Logger App using Angular Services and Dependency Injection. This app demonstrates how to create a service, inject it into components, and share data across components.

## 🚧 Requirements
- Create a `LoggerService` to log messages to the console.
- Create a `SharedService` to store and share a message using RxJS `BehaviorSubject`.
- Create two components:
  - **SenderComponent**: Updates the shared message.
  - **ReceiverComponent**: Listens to the shared message and displays it.
- Use Dependency Injection to inject the services into components.

## 🧱 Folder Structure

🧱 Folder Structure
-------------------

src/
├── app/
│   ├── logger.service.ts
│   ├── shared.service.ts
│   ├── sender/
│   │   ├── sender.component.ts
│   │   ├── sender.component.html
│   ├── receiver/
│   │   ├── receiver.component.ts
│   │   ├── receiver.component.html
│   └── app.component.ts
  

📜 Instructions
---------------

### 1️⃣ Create LoggerService

    
    // logger.service.ts
    import { Injectable } from '@angular/core';
    
    @Injectable({
      providedIn: 'root'
    })
    export class LoggerService {
      log(msg: string) {
        console.log('LOG:', msg);
      }
    }
      

### 2️⃣ Create SharedService

    
    // shared.service.ts
    import { Injectable } from '@angular/core';
    import { BehaviorSubject } from 'rxjs';
    
    @Injectable({
      providedIn: 'root'
    })
    export class SharedService {
      private messageSource = new BehaviorSubject('Hello from SharedService');
      currentMessage = this.messageSource.asObservable();
    
      updateMessage(newMsg: string) {
        this.messageSource.next(newMsg);
      }
    }
      

### 3️⃣ Create SenderComponent

    
    // sender.component.ts
    import { Component } from '@angular/core';
    import { SharedService } from '../shared.service';
    import { LoggerService } from '../logger.service';
    
    @Component({
      selector: 'app-sender',
      templateUrl: './sender.component.html'
    })
    export class SenderComponent {
      newMessage: string = '';
    
      constructor(private sharedService: SharedService, private logger: LoggerService) {}
    
      sendMessage() {
        this.sharedService.updateMessage(this.newMessage);
        this.logger.log('Message sent: ' + this.newMessage);
      }
    }
      

    
    
    
    Send
      

### 4️⃣ Create ReceiverComponent

    
    // receiver.component.ts
    import { Component, OnInit } from '@angular/core';
    import { SharedService } from '../shared.service';
    
    @Component({
      selector: 'app-receiver',
      templateUrl: './receiver.component.html'
    })
    export class ReceiverComponent implements OnInit {
      message: string = '';
    
      constructor(private sharedService: SharedService) {}
    
      ngOnInit() {
        this.sharedService.currentMessage.subscribe(msg => this.message = msg);
      }
    }
      

    
    
    Received Message: {{ message }}
      

🎯 Expected Output
------------------

* User types a message in the SenderComponent and clicks "Send".
* The message is logged in the console by LoggerService.
* ReceiverComponent updates instantly with the new message.

✅ Learning Goals
----------------

* Understand how to create and use Angular services.
* Apply dependency injection to share logic across components.
* Implement real-time communication using RxJS `BehaviorSubject`.

🚀 Bonus
--------

* Log each message in an array and display a message history in ReceiverComponent.
* Add validation to prevent empty messages.