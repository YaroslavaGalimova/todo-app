package com.yara.todo_app.service;

import java.util.Comparator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.yara.todo_app.entity.Task;
import com.yara.todo_app.repository.TaskRepository;

@Service
public class TaskService {
    private final TaskRepository taskRepo;

    public TaskService(TaskRepository taskRepo) {
        this.taskRepo = taskRepo;
    }

    public void save(Task task) {
        if (task == null || task.getTitle() == null || task.getDescription() == null || task.getTitle().isEmpty()) {
            throw new IllegalArgumentException("Task cannot be null");
        }
        taskRepo.save(task);
    }

    public void finishTask(Task task) {
        if (task == null || task.getId() == null) {
            throw new IllegalArgumentException("Task cannot be null");
        }
        task.setCompleted(true);
        taskRepo.save(task);
    }

    public Task findById(Long id) {
        return id == null ? null : taskRepo.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        if (id != null) {
            taskRepo.deleteById(id);
        }
    }

    public List<Task> findAll() {
        return taskRepo.findAll();
    }

    public List<Task> findByStatus(boolean completed) {
        return taskRepo.findByCompleted(completed);
    }

    public List<Task> findAllSortedTasks(Comparator<Task> cmp) {
        return taskRepo.findAll().stream().sorted(cmp).toList();
    }
}
