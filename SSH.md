> SSH (Secure Shell)

- SSH 为建立在应用层基础上的安全协议，用于在网络主机之间进行加密的一种协议，其目的是实现安全远程登录以及其他安全网络服务
- SSH 知识点
- - SSH 是安全的加密协议，用于远程连接linux服务器
- - SSH 的默认端口是22，安全协议版本是SSH2
- - SSH 服务器主要包含2个服务功能SSH连接和SFTP服务器
- - SSH 客户端包含SSH连接命令和远程拷贝scp命令

> linux 命令

- 查看sshd进程
```
ps -ef | grep ssh
```
  
- ![avator](images/ps_ssh.png)
- 查看ssh端口
  
```
netstat -lntup | grep ssh
ss | grep ssh
netstat -a | grep ssh
netstat -lnt | grep 22   查看22端口是否开启
```
- ![avator](images/netstat_ssh.png)
  
- 查看ssh的秘钥目录
```
ll /root/.ssh/known_hosts
```
- ![avator](images/ll_ssh.png)

- - known_hosts 中存储的是已认证的远程主机，host key，每个SSH Server都有一个secret，unique ID,called a host key.
- - 首次通过SSH登录远程主机的时候，客户端提示(yes/no),当我们选择了yes，host key 就会被加入到客户端的known_hosts中
- ![avator](images/ssh_root.png)

- 如果使用 ll  提示 -bash: ll: command not found
```
vi ~/.bashrc 
加入 alias ll='ls -l'
```
- ![avator](images/ll_not.png)

- ssh 的配置文件
```
cat /etc/ssh/sshd_config
```

> SCP (Secure Copy)

- scp 是linux下基于ssh登录进行安全的远程文件拷贝命令

- 从远程拷贝到本地

```
scp root@ip:远程文件目录  本地文件目录
scp root@0.0.0.0:/home/test /home/
```
- 从本地拷贝到远程

```
scp /home/my_test  root@0.0.0.0:/home/
```
