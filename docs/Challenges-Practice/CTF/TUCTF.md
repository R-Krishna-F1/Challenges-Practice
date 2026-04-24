# My first encryption
According to the challenge description
**I just learned about xor! Apparently it's super strong, surely it can protect my secret file!**
we get a jpeg file which is encrypted which we can tell by looking at the first few lines of the hex using the command` hexdump -C -n 128 flag.jpeg` since the description mentioned about xor our first approach
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/17a54ed7-2c77-4a40-a79b-e45c7c947816/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJVPKILA%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnutpVgic%2FmMay8f2fyGrdY%2FBV4AFlw3z6eD85BfxJ5QIgVbZv%2BugYInE5Nt5q5e1jksSlM10kQBYVKrpNyTmS7AYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMq5INBOJep1BgGWFCrcA7jqGAuPnZaKM5VCfasv0Vxba4SiKb8XelmlpvWWonl6bSffLZCIGbama1hGfymSRGWmZCVXheCUEk7C7n39T3WsQ0tN%2BU4Uvxsdh%2FqpfxkFU%2FhQUbwCFBhA%2B02WzX6iNIZ5gG4HJcR%2BgGUKjIrO3k7Wiek4ifzr5NFU8Ogw8%2B2qOOUyH%2B%2BTZBHdFyEVZB75DdQqPzlxgigWZ7sRZFSc1NAQLhDJ2out%2ByVdRFvnY1c3fPEtSq0zcG8aY7E2JqTuHc6EtvrQCLCr25XmpQ%2ForZdMNFQZnfFfdbwYxLFwCvVy9ntYXgQ%2FI9%2FbxuRK1Pq9%2FnZUFAnGINlUHaHbwD%2BmV%2BTlRNI4m5jcLtMZNrKyIw2cCeuFWmTlZGMs%2F2YilInYRx5A4xi83gKk70v8r0CtARipmlRojKKj0blbZxlx6wfejP624XI0OJF9jsUnWUVUG4%2Bu3zEkIQzao1xDg1CWfPFbA0veV90EdUMK%2B0o1Z6SpYNoFGjy8kArVevENwU5EQZzjmmw22qtNvQVHAh%2BKvFUQpMxaXghVIpmpx3ZTCXS%2Fn9WoJkG8iWDR63PZdUKCKmei7HpATTUi32F4OZo2lELs4LDKz6Q81Ze2ga4Nbv9yGxUTq%2BZ2mfqzyskjMPHYq88GOqUB7CAG5Gf%2BKInu2xGZHqXfm7XZv51%2FKx5YAbIud4MJbbKBSLpWoYchTnFcqefROlvye%2FRjFVsgE%2BL1ZGYE7bbabjv3RDlPGNTf%2FxEy%2Fz%2F%2FB4grz2RCVLXBfWlINEeNRt0VeAmisnKu%2FH6RGL%2Blo6FBHgJC%2FvB%2BkflCezqUkdXJ0%2Fu3q%2Fnq4sj6iWesVmW6JQkTYRm6Y4ha6pgQMalRxEjR4U9uq1sk&X-Amz-Signature=0044ac2f50dee72e308b9672c0f3d74df091723e694eb2a92318819cceea8d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
we could see that the file is clearly encrypted since it is different from standard hex structure of jpeg
<table>
<tr>
<td>**Byte Position**</td>
<td>**Flag.jpeg (Hex)**</td>
<td>**Standard JPEG (Hex)**</td>
</tr>
<tr>
<td>**Byte 0**</td>
<td>`cf`</td>
<td>`ff` (Start of Image)</td>
</tr>
<tr>
<td>**Byte 1**</td>
<td>`e8`</td>
<td>`d8` (Start of Image)</td>
</tr>
<tr>
<td>**Byte 2**</td>
<td>`cf`</td>
<td>`ff` (Component Marker)</td>
</tr>
<tr>
<td>**Byte 3**</td>
<td>`d0`</td>
<td>`e0` (JFIF Header)</td>
</tr>
</table>
we could repeatedly see that 30 is repeating many times which is a big red flag so lets trying xoring every number with 30 in binary (0011 0000) suprisingly we get the original hex bytes of  jpeg
we use [CyberChef](https://gchq.github.io/CyberChef/#recipe=XOR(%7B'option':'Hex','string':'30'%7D,'Standard',false)Render_Image('Raw')) and hex key as 30 we get the final output as 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/8b8ee079-8fdd-44bb-b1b7-2bcbde646052/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJVPKILA%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnutpVgic%2FmMay8f2fyGrdY%2FBV4AFlw3z6eD85BfxJ5QIgVbZv%2BugYInE5Nt5q5e1jksSlM10kQBYVKrpNyTmS7AYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMq5INBOJep1BgGWFCrcA7jqGAuPnZaKM5VCfasv0Vxba4SiKb8XelmlpvWWonl6bSffLZCIGbama1hGfymSRGWmZCVXheCUEk7C7n39T3WsQ0tN%2BU4Uvxsdh%2FqpfxkFU%2FhQUbwCFBhA%2B02WzX6iNIZ5gG4HJcR%2BgGUKjIrO3k7Wiek4ifzr5NFU8Ogw8%2B2qOOUyH%2B%2BTZBHdFyEVZB75DdQqPzlxgigWZ7sRZFSc1NAQLhDJ2out%2ByVdRFvnY1c3fPEtSq0zcG8aY7E2JqTuHc6EtvrQCLCr25XmpQ%2ForZdMNFQZnfFfdbwYxLFwCvVy9ntYXgQ%2FI9%2FbxuRK1Pq9%2FnZUFAnGINlUHaHbwD%2BmV%2BTlRNI4m5jcLtMZNrKyIw2cCeuFWmTlZGMs%2F2YilInYRx5A4xi83gKk70v8r0CtARipmlRojKKj0blbZxlx6wfejP624XI0OJF9jsUnWUVUG4%2Bu3zEkIQzao1xDg1CWfPFbA0veV90EdUMK%2B0o1Z6SpYNoFGjy8kArVevENwU5EQZzjmmw22qtNvQVHAh%2BKvFUQpMxaXghVIpmpx3ZTCXS%2Fn9WoJkG8iWDR63PZdUKCKmei7HpATTUi32F4OZo2lELs4LDKz6Q81Ze2ga4Nbv9yGxUTq%2BZ2mfqzyskjMPHYq88GOqUB7CAG5Gf%2BKInu2xGZHqXfm7XZv51%2FKx5YAbIud4MJbbKBSLpWoYchTnFcqefROlvye%2FRjFVsgE%2BL1ZGYE7bbabjv3RDlPGNTf%2FxEy%2Fz%2F%2FB4grz2RCVLXBfWlINEeNRt0VeAmisnKu%2FH6RGL%2Blo6FBHgJC%2FvB%2BkflCezqUkdXJ0%2Fu3q%2Fnq4sj6iWesVmW6JQkTYRm6Y4ha6pgQMalRxEjR4U9uq1sk&X-Amz-Signature=fa53b1886f358a3736f006c2549b2afae1b662d6cd1ccab73540aebebc8c884b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)