package ru.education.sstutravel.db.dto;

public class EmployeeDto {
    private Long id;
    private String name;
    private String surname;
    private String middleName;
    private String position;

    public EmployeeDto(Long id, String name, String surname, String middleName, String position) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.middleName = middleName;
        this.position = position;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }


}
