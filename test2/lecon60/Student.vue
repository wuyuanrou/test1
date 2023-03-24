<template>
    <div class="demo">
        <h2>学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    export default{
        name: 'Student',
        data(){
            return {
                name: "Stanford",
                age: 18,
            }
        },
    }
</script>