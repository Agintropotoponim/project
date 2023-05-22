package ru.education.sstutravel.db.dto;




public class TourDto {
    private Long id;
    private String name;
    private String description;
    private String leader;
    private byte[] cover;
    private String keys;

    public TourDto(Long id, String name, String description, String leader, byte[] cover, String keys) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.leader = leader;
        this.cover = cover;
        this.keys = keys;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLeader() {
        return leader;
    }

    public void setLeader(String leader) {
        this.leader = leader;
    }

    public byte[] getCover() {
        return cover;
    }

    public void setCover(byte[] cover) {
        this.cover = cover;
    }

    public String getKeys() {
        return keys;
    }

    public void setKeys(String keys) {
        this.keys = keys;
    }
}
