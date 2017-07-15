<template>
  <Row class="open">
    <Row type="flex" justify="center" align="top">
      <Col span="16" class="open-alert">
        <Alert>公开课发布成功后会向所有学员发送邮件通知和短信通知。</Alert>
      </Col>
    </Row>
    <Row>
      <Col span="2" offset="18" class="open-rank">
        <span>高级设置&nbsp;&nbsp;&nbsp;</span>
        <i-switch size="small" :disabled="true"></i-switch>
      </Col>
    </Row>
    <Row type="flex" justify="center" align="top">
      <Col span="16">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Form-item label="标题" prop="title">
                <Input v-model="formValidate.title" placeholder="请输入课程名称"></Input>
            </Form-item>
            <Form-item label="描述" prop="description">
                <Input v-model="formValidate.description" placeholder="请输入课程描述"></Input>
            </Form-item>
            <Form-item label="技术" prop="technology">
                <Select v-model="formValidate.technology" multiple placeholder="请选择技术类型">
                    <Option value="beijing">Html</Option>
                    <Option value="shanghai">Css</Option>
                    <Option value="shenzhen">JavaScript</Option>
                </Select>
            </Form-item>
            <Form-item label="时间日期">
                <Row>
                    <Col span="4">
                        <Form-item prop="date">
                            <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
                        </Form-item>
                    </Col>
                    <Col span="1" style="text-align: center">-</Col>
                    <Col span="4">
                        <Form-item prop="time">
                            <Time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></Time-picker>
                        </Form-item>
                    </Col>
                </Row>
            </Form-item>
            <Form-item label="图片" prop="iamge">
              <Row>
                <Col span="6">
                  <Upload
                      type="drag"
                      action="1.js">
                      <div style="padding: 12px 0;">
                          <Icon type="ios-cloud-upload" size="40" style="color: #3399ff"></Icon>
                          <p>课程图片</p>
                      </div>
                  </Upload>
                </Col>
                </Row>
            </Form-item>
            <Form-item label="适应人群" prop="crowd">
                <Checkbox-group v-model="formValidate.crowd">
                    <Checkbox label="入门"></Checkbox>
                    <Checkbox label="初级"></Checkbox>
                    <Checkbox label="中级"></Checkbox>
                    <Checkbox label="高级"></Checkbox>
                </Checkbox-group>
            </Form-item>
            <Form-item label="介绍" prop="desc">
                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="请输入..."></Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="handleSubmit('formValidate')">发布</Button>
                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </Form-item>
        </Form>
      </Col>
    </Row>
  </Row>
</template>
<script>
  export default {
    data () {
      return {
        rank: '',
        formValidate: {
          title: '',
          description: '',
          technology: [],
          iamge: '',
          crowd: [],
          date: '',
          time: '',
          desc: ''
        },
        ruleValidate: {
          title: [
              { required: true, message: '标题不能为空', trigger: 'blur' }
          ],
          technology: [
              { required: true, message: '请选择技术类型' }
          ],
          iamge: [
              { required: true, message: '请选上传课程图片', trigger: 'change' }
          ],
          crowd: [
              { required: true, type: 'array', min: 1, message: '至少选择一个', trigger: 'change' }
          ],
          date: [
              { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          time: [
              { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
          ],
          desc: [
              { required: true, message: '请输入个人介绍', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .open {
    padding: 25px 0;
    .open-alert {
      padding-bottom: 10px;
    }
    .open-rank {
      padding-bottom: 25px;
    }
  }
</style>
