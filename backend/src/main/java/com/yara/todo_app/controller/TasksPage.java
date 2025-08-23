package com.yara.todo_app.controller;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yara.todo_app.entity.Task;
import com.yara.todo_app.service.TaskService;

@RestController
@RequestMapping("/tasks")
public class TasksPage {

    private final TaskService taskService;

    public TasksPage(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/all")
    public List<Task> getAllTasks() {
        return taskService.findAll();
    }

    @GetMapping("/completed")
    public List<Task> getCompletedTasks() {
        return taskService.findByStatus(true);
    }

    @PostMapping("/add")
    public Task addTask(@RequestBody Task task) {
        taskService.save(task);
        return task;
    }

    @PostMapping("/finish")
    public Task finishTask(@RequestBody Task task) {
        taskService.finishTask(task);
        return task;
    }

    @PostMapping("/finishById")
    public Task finishTask(@RequestBody Long id) {
        Task task = taskService.findById(id);
        if (task != null) {
            taskService.finishTask(task);
        }
        return task;
    }
    
}